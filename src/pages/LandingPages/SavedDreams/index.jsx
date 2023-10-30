import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

// About Us page sections
import Newsletter from "components/Sections/Newsletter";
import AnalysedDreams from "pages/LandingPages/SavedDreams/sections/AnalysedDreams";
import AnalysedDreamStats from "pages/LandingPages/SavedDreams/sections/AnalysedDreamStats";

// Routes
import routes from "routes";
import footerRoutes from "src/footer";

// Images
import bgImage from "assets/images/pexels-kaique-rocha-447329.jpg";

// Hooks
import { useSupabaseSession } from "src/auth/client";
import { useEffect, useState } from "react";

function SavedDreams() {
  const { session, analysedDreams } = useSupabaseSession();
  const [userSession, setUserSession] = useState(null);
  const [savedDreams, setSavedDreams] = useState([]);

  document.title = "Saved Dreams | UYD";

  useEffect(() => {
    session && setUserSession(session);
    analysedDreams && setSavedDreams(analysedDreams);
    console.log("SavedDreamsPage", analysedDreams);
  }, [userSession, analysedDreams]);

  return (
    <>
      <DefaultNavbar routes={routes} brand={"Use Your Dream"} transparent light />
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
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
              Your Analysed Dreams
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Providing insights and interpretations that have helped countless individuals
              understand the hidden messages within their dreams.
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
        <AnalysedDreamStats count={savedDreams.length} />
        <AnalysedDreams dreams={savedDreams} />
        <Newsletter />
      </Card>
      <MKBox pt={4} px={1} mt={4}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default SavedDreams;
