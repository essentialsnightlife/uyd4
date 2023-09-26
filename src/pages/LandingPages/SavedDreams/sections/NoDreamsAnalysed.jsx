import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function NoDreamsAnalysed() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <DefaultCounterCard
                color="warning"
                count={0}
                description="Dreams analysed - Register or Login to stop your dreams slipping away..."
              />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Dream Analyser"
              description="Get valuable insights into your innermost thoughts and emotions through our innovative dream analyser tool."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "visit",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default NoDreamsAnalysed;
