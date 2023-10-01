import * as React from "react";
import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RecentlyAnalysedDreamCard from "src/components/Cards/RecentlyAnalysedDreamCard";

function AnalysedDreams() {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

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
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                query="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
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
