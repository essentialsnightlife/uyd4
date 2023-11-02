import * as React from "react";
import { useEffect, useState } from "react";

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
import AnalyserResponse from "pages/LandingPages/DreamAnalyser/sections/AnalyserResponse";

// Functions & Helpers
import { analyseDream, publishAnalysedDream } from "/@//apis";
import {
  apiCallsLeft,
  formatQuery,
  formatterAnalysedDream,
  saveAnalysedDreamToLocalStorage,
} from "/@//helpers";
import { ANALYSER_INPUT_MAX_CHARS, DEFAULT_MAX_API_CALLS } from "/@//constants";

function validateInput(input, length) {
  if (input.length < length) {
    alert("Please use at least 20 characters to describe your dream.");
    return false;
  }
  return true;
}

function DreamAnalyser() {
  const [query, setQuery] = useState("");
  const [context, setContext] = useState("");
  const [savedDreams, setSavedDreams] = useState([]);
  const [lastAnalysedDream, setLastAnalysedDream] = useState({});
  const [loading, setLoading] = useState(false);

  document.title = "Dream Analyser | UYD";

  useEffect(() => {
    const fetchData = async () => {
      const analysedDreamsLocal = JSON.parse(localStorage.getItem("uyd_saved"));
      console.log("analysedDreamsLocal", analysedDreamsLocal);
      analysedDreamsLocal && setSavedDreams(analysedDreamsLocal);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e, analyser, context) => {
    e.preventDefault();
    setLoading(true);
    if (!validateInput(analyser.value, 20)) {
      setLoading(false);
      return;
    }

    try {
      if (apiCallsLeft(savedDreams, DEFAULT_MAX_API_CALLS) > 0) {
        const formattedQuery = formatQuery(analyser.value, context.value);
        const dreamResponse = await analyseDream(formattedQuery);
        console.log(dreamResponse);
        const analysedDream = formatterAnalysedDream({
          query,
          analysedDream: dreamResponse,
          session: null,
        });
        setLastAnalysedDream(analysedDream);
        await publishAnalysedDream(analysedDream);
        saveAnalysedDreamToLocalStorage(analysedDream, setSavedDreams);
        if (apiCallsLeft(savedDreams, DEFAULT_MAX_API_CALLS) === 1) {
          alert(`You have one more dream to analyse for today! 1️⃣`);
        }
      } else {
        alert(
          `You have reached your limit of ${DEFAULT_MAX_API_CALLS} analysed dreams per day 🙈. Please try again tomorrow!`
        );
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        <Analyser
          analyser={{
            title: "tell us about your dream",
            rows: 3,
            maxLength: ANALYSER_INPUT_MAX_CHARS,
            value: query,
            placeholderText: "I was flying in the sky and then I fell down and after...",
            onChange: (e) => {
              e.preventDefault();
              setQuery(e.target.value);
            },
          }}
          context={{
            title: "(Optional) Add Context here",
            maxLength: 300,
            placeholderText: "Context placeholder text",
            onChange: (e) => setContext(e.target.value),
            value: context,
            rows: 2,
          }}
          onSubmit={handleSubmit}
          placeholderText="I was flying in the sky and then I fell down and after.. "
        />
        <AnalyserResponse
          analysedDream={lastAnalysedDream}
          loading={loading}
          disabled={!(loading || Object.keys(lastAnalysedDream).length !== 0)}
        />
        <RecentlyAnalysedDreams
          dreams={savedDreams}
          title="Recently Analysed Dreams"
          subtitle="Get a glimpse into your subconscious mind with our insightful interpretations."
          count={6}
        />
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
