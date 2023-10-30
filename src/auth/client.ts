import { createClient, Session } from "@supabase/supabase-js";
import { useEffect, useMemo, useState } from "react";

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const VITE_SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function useSupabaseSession() {
  const client = useMemo(() => {
    return createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);
  }, []);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: sessionData } = await client.auth.getSession();
        console.log("auth.getSession()", sessionData);
        setSession(sessionData.session);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchData();
  }, [session]);

  return { client, session };
}
