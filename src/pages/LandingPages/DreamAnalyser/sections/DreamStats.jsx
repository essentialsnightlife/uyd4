import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "components/Cards/DefaultCounterCard/";

function DreamStats() {
  return (
    <MKBox component="section" pt={3} pb={4}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={10}
              suffix="+"
              title="Dreams"
              description="A person can typically have more than ten dreams per night"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={45}
              suffix="+"
              title="Minutes"
              description="Some dreams can last for over 45 minutes, they are normally around 10-20 minutes long"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={95}
              suffix="%"
              title="People"
              description="95% of people forget their dreams within 5 minutes of waking up"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DreamStats;
