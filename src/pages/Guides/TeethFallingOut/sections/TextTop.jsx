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
            Lucid dreaming is a phenomenon in which the dreamer is aware that they are dreaming, and
            is able to control their actions while they dream.
          </MKTypography>
          <MKTypography variant="body2">
            When a person is in a lucid dream state, they are in a state of heightened awareness.
            They are able to observe their dream world from a detached perspective, and are
            sometimes even able to influence their dreams and control their actions within the
            dream. This can be a powerful experience, as the dreamer is able to explore the
            dreamscape and interact with the environment in ways that they would not be able to do
            while awake.
            <br /> <br />
            One explanation for dreaming about an ex is that it can be a reflection of unresolved
            emotions or issues. If a person is still harboring feelings of guilt, regret, or sadness
            about their relationship, they may have dreams about their ex as a way of processing
            these emotions. It can also be a sign that the person is still coming to terms with the
            breakup and trying to make sense of what happened.
            <br /> <br />
            Lucid dreaming has become a popular topic of research for psychologists and sleep
            experts. Studies have shown that lucid dreaming can help people work through and process
            traumatic experiences, and can even continue to work on issues that a person is
            currently dealing with in their waking life.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextTop;
