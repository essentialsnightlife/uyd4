import * as React from "react";
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "src/components/MKBox";

// Components
import DreamAnalyserCard from "src/components/Cards/DreamAnalyserCard";

// Constants
import { ANALYSER_INPUT_MAX_CHARS } from "/@//constants";

function Analyser({ query, setQuery, onSubmit, placeholderText }) {
  return (
    <MKBox component="section" py={0}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <form onSubmit={(e) => onSubmit(e, query)}>
              <DreamAnalyserCard
                maxLength={ANALYSER_INPUT_MAX_CHARS}
                placeholderText={placeholderText}
                query={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                title="tell us about your dream"
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
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired,
};

export default Analyser;
