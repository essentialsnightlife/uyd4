import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";

// Images
import post1 from "assets/images/examples/color2.jpg";
import post2 from "assets/images/examples/color3.jpg";
import post3 from "assets/images/examples/color1.jpg";
function Posts() {
  return (
    <MKBox component="section" py={7}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={9} textAlign="center" mx="auto">
            <MKTypography variant="h3" mb={0.5}>
              Featured Guides
            </MKTypography>
            <MKTypography variant="body2" color="text" px={{ xs: 0, md: 6 }} mb={4}>
              Dive into our curated guides, offering insights on various popular dreaming topics.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post1}
              category={{ color: "primary", label: "popular" }}
              title="Dreaming About Your Ex"
              action={{ type: "internal", route: "/guides/lucid-dreams-meaning" }}
              description="Dreaming about an ex can hold spiritual significance, signaling unresolved emotions or unfinished matters..."
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post2}
              category={{ color: "info", label: "intro" }}
              title="Lucid Dreams: Intro"
              description="Lucid dreaming occurs when a dreamer is aware that they are dreaming, and is able to control their actions..."
              action={{ type: "internal", route: "/guides/dreaming-about-your-ex" }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post3}
              category={{ color: "warning", label: "popular" }}
              title="Teeth Falling Out"
              description="Teeth falling out is often seen as a symbol of transition or transformation in dream analysis. It can indicate..."
              action={{ type: "internal", route: "/guides/teeth-falling-out" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Posts;
