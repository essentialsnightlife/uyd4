import * as React from "react";
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "src/components/MKBox";

// Components
import DreamAnalyserCard from "src/components/Cards/DreamAnalyserCard";

function Analyser({ analyser, context, onSubmit }) {
  return (
    <MKBox component="section" py={0}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <form onSubmit={(e) => onSubmit(e, analyser, context)}>
              <DreamAnalyserCard
                analyser={analyser}
                context={context}
                onChange={analyser.onChange}
                action={{
                  type: "internal",
                  color: "info",
                  label: "submit",
                }}
              />
            </form>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the Analyser
Analyser.propTypes = {
  analyser: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholderText: PropTypes.string.isRequired,
  }),
  context: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholderText: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default Analyser;
