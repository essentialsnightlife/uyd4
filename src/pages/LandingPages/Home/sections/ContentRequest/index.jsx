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
import bgPattern from "assets/images/shapes/pattern-lines.svg";
const img1 = "https://images.unsplash.com/photo-1522860747050-bb0c1af38ae9";

function ContentRequest() {
  return (
    <MKBox component="section" pt={2} my={6} variant="gradient" bgColor="light">
      <MKBox
        component="img"
        src={bgPattern}
        alt="background-pattern"
        position="absolute"
        top={0}
        left={0}
        width={{ xs: "auto", lg: "100%" }}
        height={{ xs: "100%", lg: "auto" }}
        opacity={0.6}
      />
      <Container>
        <Grid container alignItems="center">
          <Grid item sm={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Feeling inspired?</MKTypography>
            <MKTypography variant="body2" mb={3}>
              Please share some content for us to display to our community and newcomers. We&apos;ll
              share the most impactful ones, with your permission.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <MKButton href="/" variant="gradient" color="dark" sx={{ height: "100%" }}>
                  send content
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={img1} width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContentRequest;
