import React, { useState } from "react";
import { useSupabaseSession } from "/@//auth/client";

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
import PropTypes from "prop-types";

const emailRedirectUrl = import.meta.env.VITE_EMAIL_REDIRECT_URL;

const handleLogin = async (email, client) => {
  const { data, error } = await client.auth.signInWithOtp({
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

function SignInBasic({ signUp }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { client } = useSupabaseSession();

  document.title = signUp ? "Sign Up | UYD" : "Sign In | UYD";

  console.log(signUp);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MKBox variant="gradient" mx={2} pt={4} pb={2} textAlign="center">
          <MKTypography variant="h4" fontWeight="bold">
            {signUp ? "Welcome" : "Welcome Back"}
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
              handleLogin(email, client);
              setLoading(false);
            }}
          >
            <MKBox mb={1} textAlign="center">
              <MKTypography variant="body2" color="text">
                Enter your email address to get the magic link to login
                {signUp ? ", no password required." : "."}
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

SignInBasic.propTypes = {
  signUp: PropTypes.bool,
};

export default SignInBasic;
