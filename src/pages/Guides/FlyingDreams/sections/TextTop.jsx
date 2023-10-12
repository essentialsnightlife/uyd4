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
            Dreams of flying are one of the most common and popular dreams experienced by people.
            These dreams are often seen as a symbol of freedom, power and joy.{" "}
          </MKTypography>
          <MKTypography variant="body2">
            Dreams of flying are one of the most common and popular dreams experienced by people.
            These dreams are often seen as a symbol of freedom, power and joy. Flying dreams can be
            interpreted in many different ways and can have a variety of meanings.
            <br />
            <br />
            <MKTypography variant="h5" mb={2}>
              Freedom and Power
            </MKTypography>
            Flying dreams usually represent a sense of freedom and power. In the dream, the dreamer
            feels the sensation of flying with ease and without any fear. This feeling can signify a
            sense of liberation and a break away from the stresses and worries of everyday life. It
            can be a way of expressing a desire to escape from the mundane and discover something
            new.
            <br />
            <br />
            <MKTypography variant="h5" mb={2}>
              Ambition
            </MKTypography>
            Dreams of flying can also symbolize ambition. It could indicate a desire to reach higher
            goals and gain a sense of accomplishment in life. The dreamer may feel as if they are
            soaring higher than their peers and reaching new heights in their achievements.
            <br />
            <br />
            <MKTypography variant="h5" mb={2}>
              Success
            </MKTypography>
            Dreams of flying can also be a sign of ambition and ambition to reach new heights of
            success. The dreamer may be feeling a sense of determination and motivation to achieve
            something that may seem impossible. It could also represent a desire to conquer
            obstacles in life and to rise above them.
            <br />
            <br />
            <MKTypography variant="h5" mb={2}>
              Hope
            </MKTypography>
            Finally, flying dreams can also be seen as a sign of hope. They may indicate a desire to
            carry on despite difficult times and to come out on top. They can also represent a
            belief that the dreamer will eventually succeed and reach the goals they have set for
            themselves.
            <br />
            <br />
            No matter the interpretation, flying dreams can be incredibly powerful experiences. They
            can represent a sense of freedom, ambition, determination and hope. They can also be a
            way of escaping from the stress and worries of everyday life and discovering something
            new.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextTop;
