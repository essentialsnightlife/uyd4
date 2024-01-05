import React, { useEffect, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import Seo from "components/Seo";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Presentation page sections
import MainPageCards from "pages/LandingPages/Home/sections/MainPageCards";
import GetFeedback from "src/components/Sections/GetFeedback";

// Components
import DefaultFooter from "components/Footers/DefaultFooter";

// Sections
import DreamsOverview from "pages/LandingPages/Home/sections/DreamsOverview";
// import ContentRequest from "pages/LandingPages/Home/sections/ContentRequest";

// Routes
import routes from "routes";
import footerRoutes from "src/footer.routes";

// Images
import bgImage from "assets/images/uyd-banner.png";
import { useSupabaseSession } from "/@//auth/client";

function Home() {
  const { session } = useSupabaseSession();
  const [, setUserSession] = useState(null);

  useEffect(() => {
    setUserSession(session);
    console.log("HomeSession", session);
  }, [session]);

  console.log(bgImage);

  return (
    <>
      <Seo
        // title="Use Your Dream"
        description="UYD: Free Dream Analyser and guides to understand and use your dreams more effectively"
        type="website"
        image="/palm.jpeg"
      />

      <DefaultNavbar routes={routes} brand="Use Your Dream" sticky />
      <MainPageCards />
      <MKBox
        minHeight="60vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Use Your Dream
            </MKTypography>
            <MKTypography variant="body1" color="white" textAlign="center" px={6} mt={1}>
              Tap into the depths of your unconscious mind for empowerment and growth
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          // mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <DreamsOverview />
        <GetFeedback />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
