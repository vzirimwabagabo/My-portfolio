import { createBrowserClient } from "@supabase/ssr";

const DEFAULT_SUPABASE_URL = "https://njscjwsktkqrarmekhwp.supabase.co";
const DEFAULT_SUPABASE_KEY = "sb_publishable_lRG2HUMJp_PUThrvNIRgpQ_2ikB_XtI";

export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || DEFAULT_SUPABASE_KEY;

  return createBrowserClient(
    supabaseUrl,
    supabaseKey,
  );
};
