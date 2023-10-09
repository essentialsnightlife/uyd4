import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TextBottom() {
  return (
    <MKBox component="section" py={6} mt={2}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <MKTypography variant="body2">
            Lucid dreaming in modern culture:
            <br /> <br />
            <MKTypography variant="h5" mb={2}>
              Jennifer Aniston
            </MKTypography>
            Actress Jennifer Aniston has mentioned her experiences with lucid dreaming in
            interviews. She has shared how she sometimes becomes aware that she is dreaming and is
            able to shape and control the dream as it unfolds. Aniston has found lucid dreaming to
            be a fascinating and thought-provoking experience.
            <br /> <br />
            <MKTypography variant="h5" mb={2}>
              Tim Ferriss
            </MKTypography>
            Author, entrepreneur, and podcast host Tim Ferriss has researched and experimented with
            various techniques to enhance his lucid dreaming experiences. He has written and spoken
            extensively about his exploration of lucid dreaming, sharing practical tips and methods
            for inducing and navigating lucid dreams.
            <br /> <br />
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextBottom;
