import { createClient, Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { sortedAnalysedDreams } from "../helpers";
import { getUsersDreams } from "../apis";
import { AnalysedDream } from "../../lambdas/analysedDreams/types";

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const VITE_SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseClient = () => {
  return createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);
};

export const useSupabaseSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [analysedDreams, setAnalysedDreams] = useState<AnalysedDream[]>([]);

  useEffect(() => {
    supabaseClient()
      .auth.getSession()
      .then(({ data: { session } }) => {
        console.log("auth.getSession()", session);
        setSession(session);
      });

    const {
      data: { subscription },
    } = supabaseClient().auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const userId = session?.user?.id || "";

  useEffect(() => {
    const fetchAnalysedDreams = async () => {
      const data = await getUsersDreams(userId);
      console.log("responses", data.responses);
      return data.responses || [];
    };

    fetchAnalysedDreams().then((analysedDreams) => {
      console.log("fetchingAnalysedDreams: ", analysedDreams);
      setAnalysedDreams(sortedAnalysedDreams(analysedDreams));
    });
  }, [userId]);

  return { session, analysedDreams };
};
