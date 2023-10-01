import * as React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../MKBox";
import MKTypography from "../../MKTypography";
import MKButton from "../../MKButton";
import MKInput from "../../MKInput";

function DreamAnalyserCard({ title, maxLength, query, onChange, placeholderText, action }) {
  return (
    <Card>
      <MKBox p={3} mt={0} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
          {title}
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKInput
            maxLength={maxLength}
            multiline
            rows={3}
            fullWidth
            label={placeholderText}
            value={query}
            onChange={onChange}
          />
        </MKBox>
        {action.type === "external" ? (
          <MKButton
            type="submit"
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            type="submit"
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        )}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
DreamAnalyserCard.propTypes = {
  title: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
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

export default DreamAnalyserCard;
