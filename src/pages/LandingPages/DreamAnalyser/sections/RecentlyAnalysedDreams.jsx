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
import PropTypes from "prop-types";
import { formatDate } from "/@//helpers";
function RecentlyAnalysedDreams({ dreams, title, subtitle, count = 10 }) {
  console.log(dreams);
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
              {title}
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              {subtitle}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {Array.isArray(dreams) &&
            dreams.splice(0, count).map((dream, i) => (
              <Grid key={i} item xs={12} lg={6}>
                <MKBox mb={1}>
                  <RecentlyAnalysedDreamCard
                    query={dream.query}
                    date={{ color: "secondary", label: formatDate(dream.date) }}
                    response={dream.response}
                  />
                </MKBox>
              </Grid>
            ))}
        </Grid>
        <MKBox mt={2}>
          <MKTypography
            component="a"
            href="/pages/landing-pages/dream-analyser"
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

RecentlyAnalysedDreams.propTypes = {
  dreams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
      response: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default RecentlyAnalysedDreams;
