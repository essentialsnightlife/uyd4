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
            <MKTypography variant="h4" mb={2}>
              Challenges
            </MKTypography>
            In addition to reflecting our innermost fears, nightmares can also be a warning. For
            example, if a person is feeling overwhelmed or stressed in their life, they may have
            nightmares as a way of alerting them to the fact that they need to take a break and make
            some changes.
            <br />
            <br />
            The exact meaning of nightmares can vary from person to person. Generally, nightmares
            can be seen as a reflection of our innermost fears and anxieties. When we dream, our
            unconscious mind is able to bring out our repressed emotions and unresolved issues.
            Nightmares can also be a way for us to process difficult events or experiences that we
            have had in our lives.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextBottom;
