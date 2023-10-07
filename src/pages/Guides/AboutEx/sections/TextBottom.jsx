import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TextBottom() {
  return (
    <MKBox component="section" py={6} mt={6}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <MKTypography variant="body2">
            Another explanation for dreaming about an ex is that it can be a sign of nostalgia.
            People may have dreams about their ex as a way of longing for the relationship or for a
            time in their life when things were simpler. Finally, dreaming about an ex can also be a
            reflection of the person’s current relationship. If a person is feeling dissatisfied or
            unfulfilled in their current relationship, they may have dreams about their ex as a way
            of comparing their current relationship to the past.
            <br /> <br />
            If you have been dreaming about an ex recently, it can be helpful to consider what this
            might mean for you. Reflecting on the potential explanations outlined above may help you
            to gain insight into your feelings and thoughts about your ex and your current
            relationship.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextBottom;
