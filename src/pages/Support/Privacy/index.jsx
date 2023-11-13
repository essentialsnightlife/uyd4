import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "src/footer.routes";
import MuiLink from "@mui/material/Link";

function Privacy() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox component="section" pt={20} pb={12}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <MKBox
                  variant="gradient"
                  bgColor="dark"
                  borderRadius="lg"
                  coloredShadow="dark"
                  p={3}
                  mt={-3}
                  mx={2}
                >
                  <MKTypography variant="h3" color="white">
                    Privacy Policy
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Last modified: Nov 13 2023
                  </MKTypography>
                </MKBox>
                <MKBox pb={6} px={6}>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Introduction
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    The trust and privacy of our users and visitors is of primary importance. This
                    Privacy Policy document contains types of information that is collected and
                    recorded by Peng Devs and how we use it.
                    <br />
                    If you have additional questions or require more information about our Privacy
                    Policy, do not hesitate to contact us through email at
                    essentialsnightlife@gmail.com
                    <br />
                  </MKTypography>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    What Personal Data We Collect and Why We Collect It
                  </MKTypography>
                  <MKTypography variant="body2" mb={2} color="text">
                    User submitted content - we collect the content users submit to the website.
                    This is stored in an encrypted database along with senders email and any
                    additional personal data as supplied by the user.
                  </MKTypography>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    How We Get The Personal Information And Why We Have It
                  </MKTypography>
                  <MKTypography variant="body2" color="text" mb={1}>
                    Most of the personal information we process is provided to us directly by you
                    for one of the following reasons: User submitted content is sent to our inbox or
                    directly through our social media to correctly reference a user if we chose to
                    display this content on the useyourdream.com application.
                  </MKTypography>
                  <MKTypography variant="body2" color="text" mb={1}>
                    We use the information that you have given us in order to correctly reference a
                    user if we chose to display this content on the useyourdream.com application or
                    contact them again if necessary.
                  </MKTypography>
                  <MKTypography variant="body2" color="text" mb={1}>
                    We may share this information with no third party organisation.
                  </MKTypography>
                  <MKTypography variant="body2" color="text" mb={1}>
                    Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we
                    rely on for processing this information are (a) Your consent. You are able to
                    remove your consent at any time. You can do this by contacting
                    essentialsnightlife@gmail.com
                  </MKTypography>
                  <MKTypography variant="h5" mt={4} mb={3}>
                    How we store your personal information
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Your information is securely stored.
                    <br />
                    We keep user submitted content for 24 months. We will then dispose your
                    information through automated system clean up mechanisms.
                  </MKTypography>
                  <MKTypography variant="h5" mt={4} mb={3}>
                    Your Data Protection Rights
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Under data protection law, you have rights including:
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Your right of access - You have the right to ask us for copies of your
                        personal information.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Your right to rectification - You have the right to ask us to rectify
                        personal information you think is inaccurate. You also have the right to ask
                        us to complete information you think is incomplete.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Your right to erasure - You have the right to ask us to erase your personal
                        information in certain circumstances.
                      </MKTypography>
                    </MKBox>{" "}
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Your right to restriction of processing - You have the right to ask us to
                        restrict the processing of your personal information in certain
                        circumstances.
                      </MKTypography>
                    </MKBox>{" "}
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Your right to object to processing - You have the the right to object to the
                        processing of your personal information in certain circumstances.
                      </MKTypography>
                    </MKBox>{" "}
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Your right to data portability - You have the right to ask that we transfer
                        the personal information you gave us to another organisation, or to you, in
                        certain circumstances.
                      </MKTypography>
                    </MKBox>{" "}
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        You are not required to pay any charge for exercising your rights. If you
                        make a request, we have one month to respond to you.
                      </MKTypography>
                    </MKBox>{" "}
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Please contact us at essentialsnightlife@gmail.com if you wish to make a
                        request.
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                  <MKTypography variant="h5" mt={4} mb={3}>
                    How To Complain
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    If you you have any concerns about our use of your personal information, you can
                    make a complaint to us at essentialsnightlife@gmail.com
                    <br />
                    You can also complain to the ICO if you are unhappy with how we have used your
                    data.
                    <br />
                    The ICO’s address:
                    <br />
                    Information Commissioner’s Office
                    <br />
                    Wycliffe House
                    <br />
                    Water Lane
                    <br />
                    Wilmslow
                    <br />
                    Cheshire
                    <br />
                    SK9 5AF
                    <br />
                    Helpline number: 0303 123 1113
                    <br />
                    ICO website:{" "}
                    <MuiLink href={"https://www.ico.org.uk"}>https://www.ico.org.uk</MuiLink>
                  </MKTypography>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Privacy;
