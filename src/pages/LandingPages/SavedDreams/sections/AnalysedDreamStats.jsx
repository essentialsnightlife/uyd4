import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import PropTypes from "prop-types";

function AnalysedDreamStats({ count }) {
  return (
    <MKBox component="section" pt={1} pb={1}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard count={count} title="Dreams Analysed" description="" />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

AnalysedDreamStats.propTypes = {
  count: PropTypes.number.isRequired,
};

export default AnalysedDreamStats;
