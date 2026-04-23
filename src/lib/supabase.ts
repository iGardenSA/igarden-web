import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser Supabase client — للاستخدام في Client Components والنماذج.
 * آمن للاستيراد من أي Client Component.
 */
export function createBrowserSupabase() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
