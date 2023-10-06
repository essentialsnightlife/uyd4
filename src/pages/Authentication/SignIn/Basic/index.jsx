import React, { useState } from "react";
import { supabaseClient } from "/@//auth/client";

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

const emailRedirectUrl = import.meta.env.VITE_EMAIL_REDIRECT_URL;

const handleLogin = async (email) => {
  const { data, error } = await supabaseClient().auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: emailRedirectUrl,
    },
  });
  console.log(data);
  if (error) {
    console.log(error);
    return alert("Error: Please try again!");
  }

  return alert("Success: Please your email and junk folders for the access link!");
};

function SignInBasic() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  document.title = "Sign In | UYD";

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MKBox variant="gradient" mx={2} pt={4} pb={2} textAlign="center">
          <MKTypography variant="h4" fontWeight="bold">
            Welcome
          </MKTypography>
        </MKBox>
        <MKBox pt={0} mb={2} px={3}>
          <MKBox
            component="form"
            role="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              handleLogin(email);
              setLoading(false);
            }}
          >
            <MKBox mb={1} textAlign="center">
              <MKTypography variant="body2" color="text">
                Enter your email address to get a magic link to login, no password required.
              </MKTypography>
            </MKBox>
            <MKBox mt={3} mb={2}>
              <MKInput
                type="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                fullWidth
              />
            </MKBox>
            <MKBox display="flex" alignItems="center" ml={-1}></MKBox>
            <MKBox mt={4} mb={1}>
              <MKButton
                disabled={loading && email}
                type="submit"
                variant="gradient"
                color="info"
                fullWidth
              >
                next
              </MKButton>
            </MKBox>
          </MKBox>
        </MKBox>
      </Card>
    </BasicLayout>
  );
}

export default SignInBasic;
