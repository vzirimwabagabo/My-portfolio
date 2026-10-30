-- ==============================================================================
-- VALENTIN ZIRIMWABAGABO PORTFOLIO: SUPABASE SECURE DATABASE SCHEMA
-- ==============================================================================

-- 1. ADMIN USERS WHITELIST TABLE
-- Enforces that NOT just any authenticated user can edit, ONLY users registered here
CREATE TABLE IF NOT EXISTS public.portfolio_admin_users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on admin users table (nobody from public can read or write)
ALTER TABLE public.portfolio_admin_users ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
    SELECT EXISTS (
        SELECT 1 
        FROM public.portfolio_admin_users 
        WHERE id = auth.uid()
    );
$$;

-- 2. PORTFOLIO PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.portfolio_projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    category TEXT NOT NULL CHECK (category IN ('Networking', 'AI & ML', 'Backend & Systems', 'Full-Stack', 'Mobile')),
    featured BOOLEAN DEFAULT false,
    slug TEXT NOT NULL UNIQUE,
    tags TEXT[] NOT NULL DEFAULT '{}',
    github_url TEXT,
    github_label TEXT,
    live_url TEXT,
    has_special_page BOOLEAN DEFAULT false,
    special_page_path TEXT,
    case_study JSONB NOT NULL DEFAULT '{}'::jsonb,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PORTFOLIO REFEREES TABLE
CREATE TABLE IF NOT EXISTS public.portfolio_referees (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    organization TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. PORTFOLIO TIMELINE TABLE (EDUCATION & EXPERIENCE)
CREATE TABLE IF NOT EXISTS public.portfolio_timeline (
    id TEXT PRIMARY KEY,
    period TEXT NOT NULL,
    title TEXT NOT NULL,
    organization TEXT NOT NULL,
    location TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('Education', 'Experience', 'Leadership', 'Research')),
    description TEXT NOT NULL,
    achievements TEXT[] NOT NULL DEFAULT '{}',
    skills TEXT[] NOT NULL DEFAULT '{}',
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. PORTFOLIO PERSONAL INFO (SINGLE ROW CONFIG)
CREATE TABLE IF NOT EXISTS public.portfolio_personal_info (
    id TEXT PRIMARY KEY DEFAULT 'primary',
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    short_bio TEXT NOT NULL,
    full_bio TEXT NOT NULL,
    status TEXT NOT NULL,
    degree TEXT NOT NULL,
    university TEXT NOT NULL,
    scholarship TEXT NOT NULL,
    gpa TEXT NOT NULL,
    location TEXT NOT NULL,
    origin TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    phone_display TEXT,
    github TEXT NOT NULL,
    linkedin TEXT NOT NULL,
    website TEXT NOT NULL,
    resume_url TEXT NOT NULL,
    target_roles TEXT[] NOT NULL DEFAULT '{}',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- ==============================================================================
ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_referees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_personal_info ENABLE ROW LEVEL SECURITY;

-- 1. PUBLIC READ ACCESS: Anyone can view portfolio contents
CREATE POLICY "Allow public read on projects" ON public.portfolio_projects
    FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow public read on referees" ON public.portfolio_referees
    FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow public read on timeline" ON public.portfolio_timeline
    FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow public read on personal_info" ON public.portfolio_personal_info
    FOR SELECT TO anon, authenticated USING (true);

-- 2. HARDENED ADMIN MUTATION ACCESS:
-- ONLY verified admins in public.portfolio_admin_users can insert, update, or delete!
CREATE POLICY "Allow verified admins full access on projects" ON public.portfolio_projects
    FOR ALL TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

CREATE POLICY "Allow verified admins full access on referees" ON public.portfolio_referees
    FOR ALL TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

CREATE POLICY "Allow verified admins full access on timeline" ON public.portfolio_timeline
    FOR ALL TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

CREATE POLICY "Allow verified admins full access on personal_info" ON public.portfolio_personal_info
    FOR ALL TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- Allow admins to see admin user list
CREATE POLICY "Allow admins to read admin list" ON public.portfolio_admin_users
    FOR SELECT TO authenticated
    USING (public.is_admin() OR auth.uid() = id);

-- ==============================================================================
-- HELPER: How to add yourself as the first admin after creating account in Supabase:
-- INSERT INTO public.portfolio_admin_users (id, email)
-- VALUES ('<YOUR-USER-UUID-FROM-AUTH.USERS>', '<YOUR-EMAIL>');
-- ==============================================================================
