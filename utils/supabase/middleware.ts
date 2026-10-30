import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const updateSession = async (request: NextRequest) => {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // If Supabase credentials are not configured, allow public routes and redirect admin to error
  if (!supabaseUrl || !supabaseKey) {
    if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      url.searchParams.set('error', 'Supabase configuration missing');
      return NextResponse.redirect(url);
    }
    return supabaseResponse;
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Authenticate user with Supabase Auth
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Protect /admin routes (except /admin/login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      url.searchParams.set('next', pathname);
      return NextResponse.redirect(url);
    }

    // Verify user is an authorized admin in public.portfolio_admin_users table
    const { data: adminRecord, error: adminError } = await supabase
      .from('portfolio_admin_users')
      .select('id')
      .eq('id', user.id)
      .maybeSingle();

    if (adminError || !adminRecord) {
      // Authenticated with Supabase, but NOT on the whitelist! Log out / deny access
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      url.searchParams.set('error', 'Unauthorized: Admin privileges required');
      return NextResponse.redirect(url);
    }
  }

  // If already logged in and visiting /admin/login, redirect to /admin
  if (pathname === '/admin/login' && user) {
    const { data: adminRecord } = await supabase
      .from('portfolio_admin_users')
      .select('id')
      .eq('id', user.id)
      .maybeSingle();

    if (adminRecord) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin';
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
};
