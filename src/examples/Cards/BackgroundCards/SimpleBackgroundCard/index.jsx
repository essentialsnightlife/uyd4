import React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function SimpleBackgroundCard({ image, title, description }) {
  return (
    <Card
      sx={({
        functions: { rgba, linearGradient },
        palette: { black },
        borders: { borderRadius },
      }) => ({
        backgroundImage: `${linearGradient(
          rgba(black.main, 0.5),
          rgba(black.main, 0.5)
        )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: borderRadius.xl,
        height: "100%",
        display: "grid",
        justifyContent: "center",
      })}
    >
      <MKBox pt={8} pb={20} px={3}>
        <MKTypography variant="h4" color="white" mb={1}>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" mb={2}>
          {description}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the SimpleBackgroundCard
SimpleBackgroundCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

export default SimpleBackgroundCard;
