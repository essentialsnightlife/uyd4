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
            Dreaming of someone dying can be a very unsettling experience. It can be interpreted in
            many different ways, but it is often associated with feelings of loss, fear of the
            unknown, and the idea of mortality.
          </MKTypography>
          <br />
          <MKTypography variant="h5" mb={3}>
            Dreaming about someone who passed away
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            Dreaming of someone dying can represent our feelings of loss or grief. We may have
            unresolved feelings or unfinished business with the person we are dreaming of, and the
            dream is a way of processing these emotions. It can also represent our fear of the
            unknown. We may be worried about the future and fear that something bad will happen to
            us or to someone we care about.
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            Dreaming of someone dying can also remind us of our own mortality. We may be reminded of
            our own mortality and the idea that our time on this earth is limited. This can be a
            reminder to live life to the fullest and appreciate the time we have with the people we
            love.
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            It can represent our feelings of loss, our fear of the unknown, and the idea of our own
            mortality. By reflecting on these dreams, we can gain insight into our emotions and our
            fears, which can help us understand ourselves better and live life to the fullest.
          </MKTypography>
          <MKTypography variant="h5" mb={3}>
            Dreaming about someone&#39;s death, who is still alive
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            Dreaming about someone&#39;s death, especially when the person isn&#39;t old or
            unhealthy, can be a complex experience. Here are some potential pros and cons to
            consider:
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            Dreaming about someone&#39;s death can symbolize the release of negative emotions or
            harmful influences in your life. It can represent letting go of toxic relationships,
            unhelpful patterns, or negative aspects that no longer serve you.
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            Dreams about death can provide an opportunity for emotional healing and catharsis. They
            may help you process grief, sadness, or unresolved feelings towards someone, allowing
            you to find closure or come to terms with certain situations.
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            Such dreams can indicate a potential for personal growth and transformation. They may
            signify a transition or an end to a certain phase, providing an opportunity for renewal
            and positive change in your life.
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            Dreaming about someone&#39;s death can prompt introspection and reflection on past
            relationships. It may help you gain insights into the dynamics, lessons learned, or
            unresolved issues within the relationship, which can contribute to personal growth and
            self-awareness.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextTop;
