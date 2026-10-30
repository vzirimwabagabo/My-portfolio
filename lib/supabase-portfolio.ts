import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { 
  projects as defaultProjects, 
  personalInfo as defaultPersonalInfo, 
  timelineItems as defaultTimeline, 
  referees as defaultReferees,
  Project,
  PersonalInfo,
  TimelineItem,
  Referee
} from '@/lib/data';

/**
 * Fetch portfolio projects from Supabase with fallback to local static data
 */
export async function getPortfolioProjects(): Promise<Project[]> {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .order('display_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return defaultProjects;
    }

    // Map database snake_case columns to TypeScript interface
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      longDescription: item.long_description,
      category: item.category,
      featured: item.featured ?? false,
      slug: item.slug,
      tags: item.tags || [],
      githubUrl: item.github_url || undefined,
      githubLabel: item.github_label || undefined,
      liveUrl: item.live_url || undefined,
      hasSpecialPage: item.has_special_page ?? false,
      specialPagePath: item.special_page_path || undefined,
      caseStudy: item.case_study || {
        overview: '',
        problem: '',
        challenges: [],
        architecture: '',
        technologies: [],
        engineeringDecisions: [],
        results: [],
        lessonsLearned: [],
        futureImprovements: [],
      },
    }));
  } catch (err) {
    // Silent safe fallback
    return defaultProjects;
  }
}

/**
 * Fetch personal info from Supabase with fallback to local static data
 */
export async function getPortfolioPersonalInfo(): Promise<PersonalInfo> {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from('portfolio_personal_info')
      .select('*')
      .eq('id', 'primary')
      .maybeSingle();

    if (error || !data) {
      return defaultPersonalInfo;
    }

    return {
      name: data.name || defaultPersonalInfo.name,
      title: data.title || defaultPersonalInfo.title,
      shortBio: data.short_bio || defaultPersonalInfo.shortBio,
      fullBio: data.full_bio || defaultPersonalInfo.fullBio,
      status: data.status || defaultPersonalInfo.status,
      degree: data.degree || defaultPersonalInfo.degree,
      university: data.university || defaultPersonalInfo.university,
      scholarship: data.scholarship || defaultPersonalInfo.scholarship,
      location: data.location || defaultPersonalInfo.location,
      origin: data.origin || defaultPersonalInfo.origin,
      email: data.email || defaultPersonalInfo.email,
      phone: data.phone || defaultPersonalInfo.phone,
      phoneDisplay: data.phone_display || defaultPersonalInfo.phoneDisplay,
      github: data.github || defaultPersonalInfo.github,
      linkedin: data.linkedin || defaultPersonalInfo.linkedin,
      website: data.website || defaultPersonalInfo.website,
      websiteDisplay: defaultPersonalInfo.websiteDisplay,
      resumeUrl: data.resume_url || defaultPersonalInfo.resumeUrl,
      targetRoles: data.target_roles || defaultPersonalInfo.targetRoles,
    };
  } catch {
    return defaultPersonalInfo;
  }
}

/**
 * Fetch referees from Supabase with fallback to local static data
 */
export async function getPortfolioReferees(): Promise<Referee[]> {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from('portfolio_referees')
      .select('*')
      .order('display_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return defaultReferees;
    }

    return data.map((item: any) => ({
      name: item.name,
      title: item.title,
      organization: item.organization,
      email: item.email,
      phone: item.phone || undefined,
    }));
  } catch {
    return defaultReferees;
  }
}

/**
 * Fetch timeline from Supabase with fallback to local static data
 */
export async function getPortfolioTimeline(): Promise<TimelineItem[]> {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from('portfolio_timeline')
      .select('*')
      .order('display_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return defaultTimeline;
    }

    return data.map((item: any) => ({
      id: item.id,
      period: item.period,
      title: item.title,
      organization: item.organization,
      location: item.location,
      type: item.type,
      description: item.description,
      achievements: item.achievements || [],
      skills: item.skills || [],
    }));
  } catch {
    return defaultTimeline;
  }
}
