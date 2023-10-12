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
          <MKTypography variant="h4" mb={3}>
            Challenges
          </MKTypography>
          <MKTypography variant="body2" mb={6}>
            Dreaming about someone dying can present emotional and psychological challenges,
            including feelings of grief, loss, and potential uncertainty about the significance or
            impact of the dream.
          </MKTypography>
          <MKTypography variant="h5" mb={2}>
            Fear of Aging
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            Teeth can be seen as a sign of strength and power, so if we feel like we are losing
            power in our lives, our subconscious may manifest it as teeth falling out in a dream.
          </MKTypography>
          <MKTypography variant="h5" mb={2}>
            Emotional Distress
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            Dreaming about someone&#39;s death, especially if it involves someone you care about,
            can evoke intense emotions such as grief, sadness, or fear. These emotions can be
            distressing and affect your well-being, leading to feelings of anxiety or unease upon
            waking up.
          </MKTypography>
          <MKTypography variant="h5" mb={2}>
            Anxiety and Fear
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            Dreams can trigger anxieties and fears related to loss, mortality, or the fragility of
            life. These dreams might leave you feeling unsettled, anxious, or worried about the
            well-being of yourself or your loved ones.
          </MKTypography>
          <MKTypography variant="h5" mb={2}>
            Guilt and Remorse
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            If the dream involves someone you have unresolved issues with or have had a complicated
            relationship with, it may evoke feelings of guilt, regret, or remorse. This can bring up
            emotional turmoil and make it challenging to process and move forward from past
            experiences.
          </MKTypography>
          <MKTypography variant="h5" mb={2}>
            Symbolic Representation
          </MKTypography>
          <MKTypography variant="body2" mb={4}>
            It&#39;s essential to remember that dreams are highly subjective and open to
            interpretation. While dreaming of someone&#39;s death may have symbolic meanings,
            it&#39;s essential to be cautious about over analysing or attributing too much
            significance to the dream, as dreams often incorporate imagery from our subconscious and
            can be influenced by various factors.
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            Overall, dreaming about someone&#39;s death can have both pros and cons. It&#39;s
            important to approach these dreams with self-reflection, empathy, and an understanding
            that dreams are personal experiences that may carry different meanings
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextBottom;
