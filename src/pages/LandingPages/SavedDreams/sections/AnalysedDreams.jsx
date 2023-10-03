import * as React from "react";
import { useEffect, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Cards
import RecentlyAnalysedDreamCard from "src/components/Cards/RecentlyAnalysedDreamCard";

// Sections
import NoDreamsAnalysed from "pages/LandingPages/SavedDreams/sections/NoDreamsAnalysed";

// Helpers
import { formatDate } from "/@//helpers";

function AnalysedDreams(dreams) {
  const [savedDreams, setSavedDreams] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const unpackedDreams = dreams.dreams;
    setSavedDreams(unpackedDreams);
  }, [dreams]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (savedDreams.length === 0) {
    return <NoDreamsAnalysed />;
  }

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="light"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container spacing={3}>
          {Array.isArray(savedDreams) &&
            savedDreams.map((dream) => (
              <Grid key={dream.id} item xs={12} lg={6}>
                <MKBox mb={1}>
                  <RecentlyAnalysedDreamCard
                    query={dream.query}
                    date={{ color: "secondary", label: formatDate(dream.date) }}
                    response={dream.response}
                  />
                </MKBox>
              </Grid>
            ))}
        </Grid>
        <MKBox mt={5}>
          <Pagination
            page={page}
            count={10}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem slots={{ previous: ArrowBack, next: ArrowForwardIcon }} {...item} />
            )}
          />
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default AnalysedDreams;
