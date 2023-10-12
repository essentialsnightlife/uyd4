import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TextBottom() {
  return (
    <MKBox component="section" py={6} mt={6}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <MKTypography variant="h5" mb={3}>
            Loss of Power
          </MKTypography>
          <MKTypography variant="body2" mb={6}>
            Teeth can be seen as a sign of strength and power, so if we feel like we are losing
            power in our lives, our subconscious may manifest it as teeth falling out in a dream.
          </MKTypography>
          <MKTypography variant="h5" mb={3}>
            Fear of Aging
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            Teeth can be seen as a sign of strength and power, so if we feel like we are losing
            power in our lives, our subconscious may manifest it as teeth falling out in a dream.
          </MKTypography>
          <MKTypography variant="h5" mb={3}>
            Loss of Economic Security
          </MKTypography>
          <MKTypography variant="body2" mb={3}>
            In many cultures, teeth are seen as a symbol of wealth and prosperity. Thus, if we feel
            like we are losing our financial security or are unable to provide for ourselves and our
            families, this fear can manifest as teeth falling out in a dream.
          </MKTypography>
          <MKTypography variant="body2">
            If you’ve had a dream where your teeth are falling out, it is worth considering what
            underlying emotions or insecurities may be causing it. Take some time to reflect on what
            this information might mean to you and how it might be related to your life. This
            reflection can be a powerful tool for understanding our subconscious and addressing the
            underlying issues that are causing these types of dreams.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextBottom;
