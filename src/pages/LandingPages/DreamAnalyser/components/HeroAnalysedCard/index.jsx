import React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKBadge from "components/MKBadge";

// Components
import CircularIndeterminate from "components/LoadingCircularIndeterminate";

function HeroAnalysedCard({ disabled = false, loading = false, badge, analyserObj, image }) {
  const { query, response } = analyserObj;

  if (disabled || query === null || undefined) {
    return null;
  }

  if (loading) {
    return (
      <Card sx={{ mt: 3, display: "flex", alignItems: "center" }}>
        <CircularIndeterminate />;
      </Card>
    );
  }

  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: 0 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              component="img"
              src={image}
              width="60%"
              height="60%"
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKBadge
              badgeContent={badge.content}
              variant="contained"
              color={badge.color}
              container
              sx={{ mb: 1 }}
            />
            <MKTypography variant="h5">{response}</MKTypography>
            <MKTypography variant="body2" color="text">
              {analyserObj.query}
            </MKTypography>
            {analyserObj.context && (
              <MKTypography variant="body3" color="text">
                {analyserObj.context}
              </MKTypography>
            )}
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HeroAnalysedCard
HeroAnalysedCard.propTypes = {
  image: PropTypes.string.isRequired,
  badge: PropTypes.shape({
    content: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
  }).isRequired,
  loading: PropTypes.bool,
  analyserObj: PropTypes.shape({
    query: PropTypes.string,
    response: PropTypes.string,
    context: PropTypes.string,
  }).isRequired,
  disabled: PropTypes.bool,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroAnalysedCard;
