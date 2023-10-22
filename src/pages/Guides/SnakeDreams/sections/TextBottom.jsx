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
          <MKTypography variant="h4" mb={1}>
            About Snakes
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            Snakes hold significant symbolism in both modern and ancient cultures, often
            representing a wide range of meanings. Here are a few interpretations of the symbolism
            of snakes across different cultural contexts:
            <br /> <br />
          </MKTypography>

          <MKTypography variant="h5" mb={1}>
            Transformation and Kundalini Energy
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            In some Eastern spiritual traditions, the snake is closely linked with the concept of
            Kundalini energy – a divine, dormant cosmic force believed to reside within every
            individual. The coiled serpent represents this latent energy at the base of the spine,
            and its awakening and upward journey symbolize spiritual enlightenment and
            self-realization.
            <br /> <br />
          </MKTypography>

          <MKTypography variant="h5" mb={1}>
            Wisdom and Knowledge
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            The exact meaning of a recurring dream can be difficult to pinpoint. There can be
            multiple explanations for why they occur. It is important to remember that dreams are
            highly personal and may have different meanings for different people.
            <br /> <br />
          </MKTypography>

          <MKTypography variant="h5" mb={1}>
            Healing and Medicine
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            In some cultures, snakes are associated with healing and medicinal properties. This
            belief stems from their perceived ability to heal themselves by shedding their skin as
            well as their ability to strike and inject venom or antidotes. Snakes can represent the
            healing powers of nature and the hidden wisdom of herbal remedies.
            <br /> <br />
          </MKTypography>

          <MKTypography variant="h5" mb={1}>
            Dual Nature and Duality
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            Finally, recurring dreams can also be a sign that we are not living to our true
            potential. If we find ourselves dreaming of something we would like to do or achieve in
            our lives, the dream can be a reminder to take action and to pursue our goals and
            dreams.
            <br /> <br />
          </MKTypography>

          <MKTypography variant="h5" mb={1}>
            Power, Sexuality, and Sensuality
          </MKTypography>
          <MKTypography variant="body2">
            The exact meaning of a recurring dream can be difficult to pinpoint. There can be
            multiple explanations for why they occur. It is important to remember that dreams are
            highly personal and may have different meanings for different people.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextBottom;
