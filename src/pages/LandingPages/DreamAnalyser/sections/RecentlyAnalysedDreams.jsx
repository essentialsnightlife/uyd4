import * as React from "react";
import { memo } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "src/components/MKBox";
import MKTypography from "src/components/MKTypography";

// Material Kit 2 React examples
import RecentlyAnalysedDreamCard from "src/components/Cards/RecentlyAnalysedDreamCard";
import PropTypes from "prop-types";

// Helpers
import { formatDate } from "/@//helpers";

const RecentlyAnalysedDreams = memo(function RecentlyAnalysedDreams({
  dreams,
  title,
  subtitle,
  count = 10,
}) {
  dreams.sort((a, b) => new Date(b.date) - new Date(a.date));

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
          {dreams.splice(0, count).map((dream, i) => (
            <Grid key={i} item xs={12} lg={6}>
              <MKBox mb={1}>
                <RecentlyAnalysedDreamCard
                  query={dream.query}
                  date={{ color: "secondary", label: formatDate(dream.date) }}
                  response={dream.response}
                  context={dream.context}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
});

RecentlyAnalysedDreams.propTypes = {
  dreams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      userId: PropTypes.string,
      date: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
      response: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default RecentlyAnalysedDreams;
