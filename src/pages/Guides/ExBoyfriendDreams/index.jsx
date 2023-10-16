import * as React from "react";

import { useEffect, useRef } from "react";

// rellax
import Rellax from "rellax";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

// About Us page sections
import TextTop from "pages/Guides/ExBoyfriendDreams/sections/TextTop";
import Steps from "pages/Guides/ExBoyfriendDreams/sections/Steps";
import BackgroundDivider from "pages/Guides/ExBoyfriendDreams/sections/BackgroundDivider";
import Posts from "pages/Guides/ExBoyfriendDreams/sections/Posts";
import TextBottom from "pages/Guides/ExBoyfriendDreams/sections/TextBottom";

// Routes
import routes from "routes";
import footerRoutes from "src/footer.routes";

// Images
import bgImage from "assets/images/bg3.jpg";

function ExBoyfriendDreams() {
  const headerRef = useRef(null);
  document.title = "Ex Boyfriend Dreams Explained | Guides | UYD";

  // Setting up rellax
  useEffect(() => {
    const parallax = new Rellax(headerRef.current, {
      speed: -6,
    });

    return () => parallax.destroy();
  }, []);

  return (
    <>
      <MKBox bgColor="white" py={0.25}>
        <DefaultNavbar brand="Use Your Dream - Guides" routes={routes} relative />
      </MKBox>
      <MKBox
        ref={headerRef}
        minHeight="60vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" flexDirection="column">
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Dreaming about an ex-boyfriend
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mb={2}
              mr={{ xs: 0, sm: 6 }}
              pr={{ xs: 0, sm: 6 }}
            >
              Why?
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <TextTop />
        <Steps />
        <TextBottom />
        <BackgroundDivider />
        <Posts />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ExBoyfriendDreams;
