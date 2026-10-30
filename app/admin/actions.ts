import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  'use server';

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const next = (formData.get('next') as string) || '/admin';

  if (!email || !password) {
    redirect(`/admin/login?error=Please fill in all fields`);
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(`/admin/login?error=${encodeURIComponent(error.message)}`);
  }

  // Check whitelist
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    const { data: adminRecord } = await supabase
      .from('portfolio_admin_users')
      .select('id')
      .eq('id', user.id)
      .maybeSingle();

    if (!adminRecord) {
      await supabase.auth.signOut();
      redirect(`/admin/login?error=${encodeURIComponent('Access denied: You are not authorized on this admin panel.')}`);
    }
  }

  redirect(next);
}

export async function logoutAction() {
  'use server';

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  await supabase.auth.signOut();
  redirect('/admin/login');
}
