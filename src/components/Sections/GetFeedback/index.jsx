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
const feedbackImage = "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6";

function GetFeedback() {
  return (
    <MKBox component="section" pt={2} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sm={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Help Us Enhance Your Dream Analysis Journey</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              We would love to hear your thoughts on our dream app and influence our future
              features.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <MKButton
                  href="https://www.creative-tim.com"
                  variant="gradient"
                  color="info"
                  sx={{ height: "100%" }}
                >
                  Share Feedback
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={feedbackImage} width="80%" height="80%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default GetFeedback;
