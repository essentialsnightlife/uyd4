import React from "react";

// @mui material components
import Icon from "@mui/material/Icon";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// Pages
import ContactUs from "src/layouts/pages/support/contact-us";
import Privacy from "src/layouts/pages/support/privacy";
import AboutEx from "pages/Guides/AboutEx/index.jsx";
import DreamAnalyser from "pages/LandingPages/DreamAnalyser";
import SavedDreams from "pages/LandingPages/SavedDreams";
import GuidesHome from "pages/LandingPages/GuidesHome";
import Home from "pages/LandingPages/Home";
import VideosHome from "pages/LandingPages/VideosHome";

// Account
import SignInBasicPage from "src/layouts/authentication/sign-in/basic";
import SignUpPage from "layouts/authentication/sign-in/basic/sign-up-page";
import TeethFallingOut from "pages/Guides/TeethFallingOut";
import SpiritualAboutEx from "pages/Guides/SpiritualAboutEx";
import LucidDreams from "pages/Guides/LucidDreams";
// import ResetPasswordPage from "src/layouts/authentication/reset-password/cover";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 2,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "home",
            route: "/",
            component: <Home />,
          },
          {
            name: "dream analyser",
            route: "/dream-analyser",
            component: <DreamAnalyser />,
          },
          {
            name: "saved dreams",
            route: "/saved-dreams",
            component: <SavedDreams />,
          },
          {
            name: "videos",
            route: "/videos",
            component: <VideosHome />,
          },
          {
            name: "guides",
            route: "/guides",
            component: <GuidesHome />,
          },
        ],
      },
      {
        name: "support",
        collapse: [
          {
            name: "contact us",
            route: "/support/contact-us",
            component: <ContactUs />,
          },
          {
            name: "privacy",
            route: "/support/privacy",
            component: <Privacy />,
          },
        ],
      },
    ],
  },
  {
    name: "guides",
    icon: <MenuBookIcon />,
    collapse: [
      {
        name: "dreaming about your ex",
        route: "/guides/dreaming-about-your-ex",
        component: <AboutEx />,
      },
      {
        name: "lucid dreams intro",
        route: "/guides/lucid-dreams-meaning",
        component: <LucidDreams />,
      },
      {
        name: "spiritual meaning: teeth falling out",
        route: "/guides/spiritual-meaning-teeth-falling-out",
        component: <SpiritualAboutEx />,
      },
      {
        name: "teeth falling out",
        route: "/guides/teeth-falling-out",
        component: <TeethFallingOut />,
      },
    ],
  },
  {
    name: "account",
    icon: <Icon>contacts</Icon>,
    collapse: [
      {
        name: "sign in",
        route: "/sign-in",
        component: <SignInBasicPage />,
      },
      {
        name: "sign up",
        route: "/sign-up",
        component: <SignUpPage />,
      },
    ],
  },
];

export default routes;
