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
            Recurring dreams can be a sign that there is something unresolved or unaddressed in our
            lives, and they can be a way for our subconscious to prompt us to take action.
          </MKTypography>
          <MKTypography variant="body2">
            One of the most mysterious aspects of dreaming is the concept of recurring dreams. A
            recurring dream is a dream that a person has multiple times over a certain period of
            time.
            <br /> <br />
            When it comes to recurring dreams, there is often a deeper meaning behind this dream
            symbol. Recurring dreams can be a sign that there is something unresolved or unaddressed
            in our lives, and they can be a way for our subconscious to prompt us to take action.
            <br /> <br />
            <MKTypography variant="h4" mb={2}>
              Positives
            </MKTypography>
            <br />
            <MKTypography variant="h5" mb={2}>
              Personal Growth
            </MKTypography>
            <br />
            Recurring dreams that depict personal growth or progress can signify a positive and
            ongoing transformation in your life. These dreams may reflect your journey toward
            self-improvement, increased self-awareness, and a desire to reach your full potential.
            <MKTypography variant="h5" mb={2}>
              Manifestation of Goals
            </MKTypography>
            <br />
            Positive recurring dreams can sometimes represent the manifestation of your goals and
            desires. These dreams may indicate that you are moving closer to achieving what you
            desire in your waking life. They can serve as a reminder to stay focused, motivated, and
            optimistic about your aspirations.
            <MKTypography variant="h5" mb={2}>
              Symbolic Messages
            </MKTypography>
            <br />
            Recurring dreams often contain symbolic messages that reflect your subconscious
            thoughts, emotions, or conflicts. Positive recurring dreams may carry empowering
            messages, such as encouragement, inner strength, or reminders of your innate potentials.
            These dreams can provide a sense of reassurance, hope, and guidance in navigating
            challenges and pursuing your passions.
            <MKTypography variant="h5" mb={2}>
              Emotional Healing
            </MKTypography>
            <br />
            Some recurring dreams may symbolize ongoing emotional healing or resolution of past
            wounds. These dreams can indicate that you are actively working through and transcending
            emotional pain or trauma, leading to greater personal well-being, inner peace, and
            emotional balance.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextTop;
