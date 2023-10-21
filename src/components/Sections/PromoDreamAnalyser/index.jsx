import * as React from "react";
/* eslint-disable react/jsx-no-duplicate-props */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Images
import feedbackImage from "assets/images/pexels-gustavo-fring-7447075.jpg";

function PromoDreamAnalyser() {
  return (
    <MKBox component="section" pt={2} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sm={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">
              Explore Your Dreams: From Understanding to Analysis
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Unlock the mysteries of your mind with our dream analysis tool, designed to go deeper
              and personalised for you.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <MKButton
                  href="/dream-analyser"
                  variant="gradient"
                  color="info"
                  sx={{ height: "100%" }}
                >
                  Free Dream Analyser
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={feedbackImage} width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PromoDreamAnalyser;
