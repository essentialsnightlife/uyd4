import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Components
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

// Sections
import Analyser from "pages/LandingPages/DreamAnalyser/sections/Analyser";
import RecentlyAnalysedDreams from "pages/LandingPages/DreamAnalyser/sections/RecentlyAnalysedDreams.jsx";
import DreamStats from "pages/LandingPages/DreamAnalyser/sections/DreamStats";
import GetFeedback from "src/components/Sections/GetFeedback";

// Routes
import routes from "routes";
import footerRoutes from "src/footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function DreamAnalyser() {
  return (
    <>
      <DefaultNavbar routes={routes} brand={"Use Your Dream"} transparent light />
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.85),
              rgba(gradients.dark.state, 0.85)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Dream Analyser
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Unravel the hidden meanings behind your dreams. Describe them here and gain valuable
              insights into your inner thoughts and emotions.
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
        <Analyser />
        <RecentlyAnalysedDreams />
        <DreamStats />
        <GetFeedback />
      </Card>
      <MKBox pt={4} px={1} mt={4}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default DreamAnalyser;
