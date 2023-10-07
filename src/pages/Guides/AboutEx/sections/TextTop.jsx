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
            Dreaming about an ex can hold spiritual significance, signaling unresolved emotions or
            unfinished matters that require attention and reflection. It serves as a reminder to
            heal, learn, and move forward, offering valuable insights into personal growth and
            closure.
          </MKTypography>
          <MKTypography variant="body2">
            Dreaming about an ex can be a confusing and sometimes troubling experience. Dreams can
            often be a reflection of our innermost thoughts and feelings, and it is not unusual for
            people to dream about their ex-partners. The exact meaning of these dreams can vary from
            person to person, but there are some potential explanations for why people might
            experience them.
            <br /> <br />
            One explanation for dreaming about an ex is that it can be a reflection of unresolved
            emotions or issues. If a person is still harboring feelings of guilt, regret, or sadness
            about their relationship, they may have dreams about their ex as a way of processing
            these emotions. It can also be a sign that the person is still coming to terms with the
            breakup and trying to make sense of what happened.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextTop;
