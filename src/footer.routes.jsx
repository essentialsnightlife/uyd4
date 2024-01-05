import * as React from "react";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
// import logo from "assets/images/logo-uyd.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Use Your Dream",
    // image: logo,
    route: "/",
  },
  socials: [
    // {
    //   icon: <FacebookIcon />,
    //   link: "https://www.facebook.com/CreativeTim/",
    // },
    // {
    //   icon: <TwitterIcon />,
    //   link: "https://twitter.com/creativetim",
    // },
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/creativetimofficial",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
  ],
  menus: [
    {
      name: "Support",
      items: [{ name: "leave feedback", href: "https://uyd-feedback-l1vnlxzn.featureupvote.com/" }],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "/support/disclaimers" },
        { name: "privacy policy", href: "/support/privacy" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Use Your Dream
      <MKTypography
        component="a"
        // href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        {""}
      </MKTypography>
      .
    </MKTypography>
  ),
};
