import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "src/components/MKBox";

// Material Kit 2 React examples
import DreamAnalyserCard from "src/components/Cards/DreamAnalyserCard";

function Analyser() {
  return (
    <MKBox component="section" py={0}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <DreamAnalyserCard
              title="tell us about your dream"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "submit",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Analyser;
