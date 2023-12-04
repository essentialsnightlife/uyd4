import * as React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../MKBox";
import MKTypography from "../../MKTypography";

// @mui material components
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";

function RecentlyAnalysedDreamCard({ query, date, response, context, handleDeleteDream }) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} xl={12} sx={{ my: "auto" }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h6" color={date.color} mb={1}>
              {date.label}
            </MKTypography>
            <MKTypography variant="h5">{query}</MKTypography>
            {context && (
              <MKTypography variant="body2" color="text" mb={2}>
                {context}
              </MKTypography>
            )}
            <MKTypography variant="body" color="text" mb={1}>
              {response}
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          {/*<FavoriteIcon />*/}
          <IconButton onClick={handleDeleteDream}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
RecentlyAnalysedDreamCard.propTypes = {
  query: PropTypes.string.isRequired,
  context: PropTypes.string,
  date: PropTypes.shape({
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
  response: PropTypes.string.isRequired,
  handleDeleteDream: PropTypes.func.isRequired,
};

export default RecentlyAnalysedDreamCard;
