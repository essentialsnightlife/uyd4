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
            Dreams about our ex-boyfriends can be interpreted in various ways, but they are often
            associated with unresolved emotions and unfinished business.
          </MKTypography>
          <MKTypography variant="body2">
            Dreams about ex-boyfriends can be puzzling, but they can also provide valuable insight
            into our present relationships. For example, dreaming about an ex-boyfriend could
            symbolize our longing for the security of that relationship. We may miss the comfort
            that the relationship gave us and want to go back to the feeling of being taken care of.
            It could also symbolize our fear of being vulnerable in a new relationship. We may be
            scared to open up to someone new and feel like our ex-boyfriend was the only person we
            could trust.
            <br /> <br />
            On the other hand, dreaming about an ex-boyfriend could also symbolize our need for
            closure. We may want to know why the relationship ended and why we weren&apos;t able to
            work it out. We may also want to say goodbye and find a way to move on.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextTop;
