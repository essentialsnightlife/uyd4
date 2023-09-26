import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "src/components/MKBox";
import MKTypography from "src/components/MKTypography";

// Material Kit 2 React examples
import RecentlyAnalysedDreamCard from "src/components/Cards/RecentlyAnalysedDreamCard";
function RecentlyAnalysedDreams() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 4 }}>
            <MKTypography variant="h3" color="white">
              Recently Analysed Dreams
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Get a glimpse into your subconscious mind with our insightful interpretations.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                name="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                name="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RecentlyAnalysedDreamCard
                name="Why do I keep dreaming about my ex?"
                date={{ color: "secondary", label: "Mon 13 May 2023 08:00" }}
                response="Your dream is a reflection of your previous relationship with your ex. Focus your emotional energy elsewhere. If he reaches out to you in the future, then speak with him about your thoughts and feelings at that time."
              />
            </MKBox>
          </Grid>
        </Grid>
        <MKBox mt={2}>
          <MKTypography
            component="a"
            href="#"
            variant="button"
            color="white"
            fontWeight="regular"
            sx={{
              width: "max-content",
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.5rem",
                transform: "translateX(3px)",
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: "translateX(6px)",
              },
            }}
          >
            View all your saved analysed dreams here
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default RecentlyAnalysedDreams;
