import React from "react";
import loadable from "@loadable/component";
import CircularIndeterminate from "components/LoadingCircularIndeterminate";

const handleCatchChunkError = (e) => {
  console.log(e);
  // window.location.reload();

  return { default: CircularIndeterminate };
};

export const DreamAnalyser = loadable(
  () =>
    import("pages/LandingPages/DreamAnalyser")
      .then(({ DreamAnalyser }) => ({ default: DreamAnalyser }))
      .catch(handleCatchChunkError),
  { fallback: <CircularIndeterminate /> }
);
