import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import YouTubeEmbed from "components/YouTubeEmbed";

function TextBottom() {
  return (
    <MKBox component="section" py={6} mt={2}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <MKTypography variant="body2" mb={2}>
            No matter the interpretation, flying dreams can be incredibly powerful experiences. They
            can signify a range of emotions, from liberation to ambition and hope. Consider what
            your flying dreams might mean to you and how you can use this information to motivate
            yourself and achieve the goals you have set for yourself.
          </MKTypography>
          <MKTypography variant="h5" mb={2}>
            How to Fly in Real Life
          </MKTypography>
          <MKTypography variant="body2" mb={4}>
            In exploring dreams of human flight, parallels can be drawn to the closest humans have
            come to flying unaided, such as through the use of wingsuits.
            <br />
            The closest humans have come to flying unaided is through various types of wingsuits. A
            wingsuit is a specialized jumpsuit with fabric attached between the legs and under the
            arms, creating wings-like surfaces. By wearing a wingsuit, a person can generate lift
            during a freefall and glide through the air. Though it does not allow sustained flight,
            wingsuit flying enables humans to achieve a significant degree of controlled descent and
            horizontal movement, creating a sensation similar to that of flying.
          </MKTypography>
          <YouTubeEmbed mb={2} embedId={"ajnRLMNEp3I"} title={"Flying in Real Life"} />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextBottom;
