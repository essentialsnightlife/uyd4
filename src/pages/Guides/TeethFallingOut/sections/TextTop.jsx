import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TextTop() {
  return (
    <MKBox component="section" py={6} mt={6}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <MKTypography
            component="h6"
            variant="button"
            opacity={0.7}
            textTransform="uppercase"
            fontWeight="bold"
          >
            TLDR
          </MKTypography>
          <MKTypography variant="h3" mb={3}>
            Dreams of teeth falling out evoke diverse interpretations: insecurity, loss of control,
            aging fears, but can carry positive meanings.
          </MKTypography>
          <MKTypography variant="body2" mb={6}>
            Teeth falling out is often seen as a symbol of transition or transformation in dream
            analysis. It can indicate that you are going through a significant change or entering a
            new phase in your life. This can be seen as a positive sign of personal growth and
            development.
          </MKTypography>
          <MKTypography variant="h5" mb={3}>
            Release of anxiety
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            Dreams about teeth falling out can serve as a subconscious way to release stress or
            anxiety. By manifesting these fears in the dream world, it can help you cope with and
            address these concerns in your waking life.
          </MKTypography>
          <MKTypography variant="h5" mb={3}>
            Sense of renewal
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            Losing teeth in a dream may represent the shedding of old and outdated aspects of
            yourself. It can be a sign that you are letting go of negative habits, toxic
            relationships, or outdated beliefs, allowing yourself to start afresh and make positive
            changes.
          </MKTypography>
          <MKTypography variant="h5" mb={3}>
            Communication and expression
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            Teeth are essential for speaking and expressing ourselves. Dreams about teeth falling
            out may indicate a desire to improve communication or express yourself more effectively.
            It can encourage you to find your voice and speak up more confidently.
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            Whilst most of us are accustomed to dreaming of events that take place in our lives or
            in our imaginations, sometimes our dreams become more surreal with symbolic images, such
            as teeth falling out, that can be harder to interpret.
          </MKTypography>
          <MKTypography variant="h5" mb={3}>
            Insecurity & Anxiety
          </MKTypography>
          <MKTypography variant="body2">
            Teeth are closely associated with our sense of identity, so if we feel insecure about
            our appearance, it can manifest as teeth falling out in a dream.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextTop;
