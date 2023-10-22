import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";

// Images
const post1 = {
  url: "https://images.unsplash.com/photo-1693924538557-438fee139f9f",
  alt: "Dreaming About Your Ex",
};
const post2 = {
  url: "https://images.unsplash.com/photo-1695555896983-fae87f1e18cf",
  alt: "Lucid Dreams: Intro",
};
const post3 = {
  url: "https://images.unsplash.com/photo-1695929978742-b7f037f9e835",
  alt: "Teeth Falling Out",
};

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
              url={post1.url}
              alt={post1.alt}
              category={{ color: "primary", label: "popular" }}
              action={{ type: "internal", route: "/guides/lucid-dreams-meaning" }}
              description="Dreaming about an ex can hold spiritual significance, signaling unresolved emotions or unfinished matters..."
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              url={post2.url}
              alt={post2.alt}
              category={{ color: "info", label: "intro" }}
              description="Lucid dreaming occurs when a dreamer is aware that they are dreaming, and is able to control their actions..."
              action={{ type: "internal", route: "/guides/dreaming-about-your-ex" }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              url={post3.url}
              alt={post3.alt}
              category={{ color: "warning", label: "popular" }}
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
