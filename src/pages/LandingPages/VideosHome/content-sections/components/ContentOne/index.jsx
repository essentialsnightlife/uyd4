import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Custom components
import VideoCard from "components/VideoCard";

function ContentOne() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={8}
          flexDirection="column"
          alignItems="center"
          mx="auto"
          textAlign="center"
          mb={6}
        >
          <MKBadge
            badgeContent="co-working"
            variant="contained"
            color="dark"
            container
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h2" mb={1}>
            Explore videos from our community
          </MKTypography>
          <MKTypography variant="body2" color="text">
            If you can&apos;t decide, the answer is no. If two equally difficult paths, choose the
            one more painful in the short term (pain avoidance is creating an illusion of equality).
          </MKTypography>
        </Grid>
        <Grid container spacing={6} minHeight="40vh">
          <Grid item xs={7} sm={3}>
            <VideoCard />
          </Grid>{" "}
          <Grid item xs={7} sm={3}>
            <VideoCard />
          </Grid>{" "}
          <Grid item xs={7} sm={3}>
            <VideoCard />
          </Grid>
          <Grid item xs={7} sm={3}>
            <VideoCard />
          </Grid>
          <Grid item xs={7} sm={3}>
            <VideoCard />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContentOne;
