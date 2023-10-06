import React from "react";

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

// Sections
import GetFeedback from "components/Sections/GetFeedback";

// Layouts
import View from "components/View";

// Content sections components
import ContentOne from "pages/LandingPages/VideosHome/content-sections/components/ContentOne";
import ContentTwo from "pages/LandingPages/VideosHome/content-sections/components/ContentTwo";
import contentOneCode from "pages/LandingPages/VideosHome/content-sections/components/ContentOne/code";
import contentTwoCode from "pages/LandingPages/VideosHome/content-sections/components/ContentTwo/code";

// Routes
import routes from "routes";
import footerRoutes from "src/footer";

// Images
import bgImage from "assets/images/bg-rental.jpeg";

function VideosHome() {
  document.title = "Videos | UYD";

  return (
    <>
      <DefaultNavbar routes={routes} brand={"Use Your Dream"} transparent light />
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
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
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h2"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Videos
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={1}>
              Add videos text here Make sense of your nighttime experiences with our informative
              guides to popular dreaming themes, helping you unlock the potential in your dream
              world
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
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "hidden",
        }}
      >
        <View title="Community Content" code={contentOneCode}>
          <ContentOne />
        </View>
        <View title="Tutorials" code={contentTwoCode}>
          <ContentTwo />
        </View>
        <GetFeedback />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default VideosHome;
