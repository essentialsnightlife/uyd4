import React from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import SectionCards from "examples/Cards/BackgroundCards/SimpleBackgroundCard";

function MainPageCards() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} lg={4}>
            <Link to="/dream-analyser">
              <SectionCards
                image="https://images.unsplash.com/photo-1695119592276-ea0f8241372f"
                title="Free Dream Analyser"
                description="Delve into the profound depths of your dreamscapes as our complimentary dream analysis tool sheds light on their profound significance."
              />
            </Link>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Link to="/guides">
              <SectionCards
                image="https://images.unsplash.com/photo-1690993660127-1a7cdd87ec9e"
                title="Dreaming Guides & FAQs"
                description="Your essential resources for enhancing dream exploration and understanding - use them as a roadmap to understanding the hidden messages in your dreams. "
              />
            </Link>
          </Grid>
          <Grid item xs={12} lg={4}>
            {/*<Link to="/sections/page-sections/blog-posts">*/}
            <SectionCards
              image="https://images.unsplash.com/photo-1696888657706-5875304374c6"
              title="Shop Dreaming Products"
              description="Coming soon. We are working on a range of products to help you enhance your dream exploration and understanding."
            />
            {/*</Link>*/}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default MainPageCards;
