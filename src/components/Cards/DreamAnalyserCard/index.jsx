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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function DreamAnalyserCard({ analyser, context, action }) {
  const [addContextDropdown, setAddContextDropdown] = React.useState(false);

  const handleToggleAddContext = () => {
    setAddContextDropdown(!addContextDropdown);
  };

  return (
    <Card>
      <MKBox p={3} mt={0}>
        <MKBox mt={0} display="flex" alignItems="center">
          <Tooltip
            title="For best results please use the word dream and be as specific and descriptive as possible when describing"
            followCursor
          >
            <InfoOutlinedIcon />
          </Tooltip>
          <MKTypography
            display="block"
            variant="5"
            fontWeight="bold"
            mt={1}
            ml={0.5}
            mb={1.5}
            textTransform="capitalize"
          >
            {analyser.title}
          </MKTypography>
        </MKBox>
        <MKBox mt={1} mb={3}>
          <MKInput
            maxLength={analyser.maxLength}
            multiline
            rows={analyser.rows}
            fullWidth
            label={analyser.placeholderText}
            value={analyser.value}
            onChange={analyser.onChange}
          />
        </MKBox>
        <MKBox
          display="flex"
          alignItems="center"
          onClick={handleToggleAddContext}
          style={{ cursor: "pointer" }}
        >
          {addContextDropdown ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          <MKTypography
            display="block"
            variant="5"
            fontWeight="bold"
            mt={1}
            ml={0.5}
            mb={1.5}
            textTransform="capitalize"
          >
            {context.title}
          </MKTypography>
        </MKBox>
        {addContextDropdown && (
          <MKBox mt={1} mb={3}>
            <MKInput
              maxLength={context.maxLength}
              multiline
              rows={context.rows}
              fullWidth
              label={context.placeholderText}
              value={context.value}
              onChange={context.onChange}
            />
          </MKBox>
        )}
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

DreamAnalyserCard.defaultProps = {
  analyser: {
    rows: 3,
    maxLength: 400,
  },
  context: {
    rows: 2,
    maxLength: 300,
  },
};

// Typechecking props for the DreamAnalyserCard
DreamAnalyserCard.propTypes = {
  analyser: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
    placeholderText: PropTypes.string,
    rows: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  }),
  context: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
    placeholderText: PropTypes.string,
    rows: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
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
