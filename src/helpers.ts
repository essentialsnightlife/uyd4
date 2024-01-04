import { Session } from "@supabase/supabase-js";

import { AnalysedDream } from "../lambdas/analysedDreams/types";
import { BOT_INSTRUCTIONS } from "./constants";
import React from "react";
import { getUsersDreams } from "./apis";

export function removeNonLetters(str: string) {
  return str.replace(/^[^a-zA-Z]*/g, "");
}

export function formatDate(dateStr: string) {
  const dateObj = new Date(dateStr);
  const dayFirst3Letters = dateObj.toLocaleString("default", { weekday: "long" }).substring(0, 3);
  const date = dateStr.slice(0, 10) + " " + dateStr.slice(11, 16);
  return dayFirst3Letters.toUpperCase() + " " + date;
}

export const sortedAnalysedDreams = (analysedDreams: AnalysedDream[]) => {
  analysedDreams.sort((a, b) => {
    if (!a.date || !b.date) {
      return 0;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return Array.isArray(analysedDreams) ? analysedDreams : [];
};

export const apiCallsLeft = (analysedDreams: AnalysedDream[], max: number) => {
  const today = new Date();
  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).toISOString();
  return Math.max(
    0,
    max - analysedDreams.reduce((count, dream) => count + (dream.date >= startOfToday ? 1 : 0), 0)
  );
};

export function formatterAnalysedDream({
  query,
  analysedDream,
  session,
  context,
}: {
  query: string;
  analysedDream: string;
  session: Session | null;
  context?: string | null;
}): AnalysedDream {
  return {
    id: "UYD" + String(Math.floor(Math.random() * 100) + 1) + String(Date.now()).substring(0, 8),
    userId: session?.user.id || "POC",
    query,
    context,
    response: analysedDream,
    date: new Date().toISOString(),
  };
}

export function formatQuery(query: string, userContext: string) {
  return BOT_INSTRUCTIONS + "; question is " + query + "; context is: " + userContext;
}

export const saveAnalysedDreamToLocalStorage = (
  analysedDream: AnalysedDream,
  setterFunc: React.Dispatch<React.SetStateAction<AnalysedDream[]>>
) => {
  const existingSavedDreams = localStorage.getItem("uyd_saved");
  let savedDreamsArray = [];

  if (existingSavedDreams) {
    savedDreamsArray = JSON.parse(existingSavedDreams);
  }

  savedDreamsArray.push(analysedDream);
  localStorage.setItem("uyd_saved", JSON.stringify(savedDreamsArray));
  setterFunc([...savedDreamsArray]);
};

export async function getAnalysedDreamsFromDB(session: Session | null) {
  const userId = session?.user?.id || "";
  const data = await getUsersDreams(userId);
  console.log("responses", data.responses);
  return data.responses || [];
}

export const stripHtml = (str: string) => str.replace(/(<([^>]+)>)/gi, "");

export const setTitle = (title: string) => (title ? `${title} | UYD` : "UYD");
