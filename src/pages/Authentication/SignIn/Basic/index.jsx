import React from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Authentication pages components
import BasicLayout from "pages/Authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function SignInBasic() {
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MKBox variant="gradient" mx={2} p={2} textAlign="center">
          <MKTypography variant="h4" fontWeight="medium" color="black">
            Welcome
          </MKTypography>
        </MKBox>
        <MKBox pt={0} pb={3} px={3}>
          <MKBox component="form" role="form">
            <MKBox mb={1} textAlign="center">
              <MKTypography variant="button" color="text">
                Enter your email address to get a magic link to sign in or register, no password
                required.
              </MKTypography>
            </MKBox>
            <MKBox mb={2}>
              <MKInput type="email" label="Email" fullWidth />
            </MKBox>
            <MKBox display="flex" alignItems="center" ml={-1}></MKBox>
            <MKBox mt={4} mb={1}>
              <MKButton variant="gradient" color="info" fullWidth>
                sign in
              </MKButton>
            </MKBox>
          </MKBox>
        </MKBox>
      </Card>
    </BasicLayout>
  );
}

export default SignInBasic;
