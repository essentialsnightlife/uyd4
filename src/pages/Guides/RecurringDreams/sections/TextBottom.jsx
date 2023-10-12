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
            Recurring dreams can be a sign that there is something unresolved or unaddressed in our
            lives. They can be a sign that we are avoiding something or that there is something we
            are not facing up to. The dream can be a reminder to take the time to reflect on what
            the dream might be trying to tell us, and to consider what action we might need to take
            to address the issue.
            <br /> <br />
            Recurring dreams can also be a sign that we are stuck in a certain pattern of behavior.
            If we find ourselves having the same dream over and over again, it can be a sign that we
            need to make some changes in our lives. The dream can be a reminder to take a step back
            and to consider what changes we might need to make in order to move forward.
            <br /> <br />
            Finally, recurring dreams can also be a sign that we are not living to our true
            potential. If we find ourselves dreaming of something we would like to do or achieve in
            our lives, the dream can be a reminder to take action and to pursue our goals and
            dreams.
            <br /> <br />
            The exact meaning of a recurring dream can be difficult to pinpoint. There can be
            multiple explanations for why they occur. It is important to remember that dreams are
            highly personal and may have different meanings for different people.
            <br /> <br />
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextBottom;
