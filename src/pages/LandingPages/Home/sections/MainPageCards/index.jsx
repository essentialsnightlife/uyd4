import React from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import SectionCards from "examples/Cards/BackgroundCards/SimpleBackgroundCard";

function MainPageCards() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={7} justifyContent="center" mx="auto" mt={6}>
          <MKTypography
            mt={3}
            mb={1}
            variant="h1"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            Some Intro Text
          </MKTypography>
          <MKTypography variant="body1" textAlign="center" px={6} mt={1}>
            Tap into the depths of your unconscious mind for empowerment and growth
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} lg={4}>
            <Link to="/dream-analyser">
              <SectionCards
                image="https://images.unsplash.com/photo-1695119592276-ea0f8241372f"
                title="Free Dream Analyser"
                description="Website visitors today demand a frictionless user expericence — especially when
                    using search. Because of the hight standards we tend to offer."
              />
            </Link>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Link to="/guides">
              <SectionCards
                image="https://images.unsplash.com/photo-1690993660127-1a7cdd87ec9e"
                title="Dreaming Guides & FAQs"
                description="Wealth creation is an evolutionarily recent positive-sum game. Status is an old
                    zero-sum game. Those attacking wealth creation are often just seeking status."
              />
            </Link>
          </Grid>
          <Grid item xs={12} lg={4}>
            {/*<Link to="/sections/page-sections/blog-posts">*/}
            <SectionCards
              image="https://images.unsplash.com/photo-1696888657706-5875304374c6"
              title="Shop Dreaming Products"
              description="Coming soon."
            />
            {/*</Link>*/}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default MainPageCards;
