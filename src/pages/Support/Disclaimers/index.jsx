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

function Disclaimers() {
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
                    Disclaimer Policies
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Last modified: Dec 25 2023
                  </MKTypography>
                </MKBox>
                <MKBox pb={6} px={6}>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Website
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    The information provided by Peng Devs Ltd (“we,” “us” or “our”) on
                    useyourdream.com (the &apos;Site&apos;) is for general informational purposes
                    only. All information on the Site is provided in good faith, however we make no
                    representation or warranty of any kind, express or implied, regarding the
                    accuracy, adequacy, validity, reliability, availability or completeness of any
                    information on the Site.
                    <br />
                    Under no circumstances shall we have any liability to you for any loss or damage
                    of any kind incurred as a result of the use of the site or reliance on any
                    information provided on the site. Your use of the site and your reliance on any
                    information on the site is solely at your own risk.
                    <br />
                  </MKTypography>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    External Links
                  </MKTypography>
                  <MKTypography variant="body2" mb={2} color="text">
                    The Site may contain (or you may be sent through the Site) links to other
                    websites or content belonging to or originating from third parties or links to
                    websties and features in banners or other advertising. Such external links are
                    not investigated, monitored, or checked for accuracy, adequacy, validity,
                    reliability, availability or completeness by us.
                    <br />
                    We do not warrant, endorse, guarantee, or assume responsibility for the accuracy
                    or reliability of any information offered by third-party websites linked through
                    the site or any website or feature linked in any banner or other advertising. We
                    will not be a party to or in any way be responsible for monitoring any
                    transaction between you and third-party providers of products or services.
                    <br />
                  </MKTypography>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Professional Disclaimer
                  </MKTypography>
                  <MKTypography variant="body2" color="text" mb={1}>
                    The Site cannot and does not contain medical/health advice. The medical/health
                    information is provided for general informational and educational purposes only
                    and is not a substitute for professional advice. Accordingly, before taking any
                    actions based upon such information we encourage you to consult with the
                    appropriate professionals. We do not provide any kind of medical/health advice.
                    The use or reliance of any information contained on this site is solely at your
                    own risk.
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

export default Disclaimers;
