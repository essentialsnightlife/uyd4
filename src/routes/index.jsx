import React from "react";

// @mui material components
import Icon from "@mui/material/Icon";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// Pages
import ContactUs from "src/layouts/pages/support/contact-us";
import Privacy from "src/layouts/pages/support/privacy";
import AboutEx from "pages/Guides/AboutEx/index.jsx";
// import SavedDreams from "pages/LandingPages/SavedDreams";
import GuidesHome from "pages/LandingPages/GuidesHome";
import Home from "pages/LandingPages/Home";
// import VideosHome from "pages/LandingPages/VideosHome";

// Account
// import SignInBasicPage from "src/layouts/authentication/sign-in/basic";
// import SignUpPage from "layouts/authentication/sign-in/basic/sign-up-page";
import TeethFallingOut from "pages/Guides/TeethFallingOut";
import SpiritualAboutEx from "pages/Guides/SpiritualAboutEx";
import LucidDreams from "pages/Guides/LucidDreams";
import NightmaresMeaning from "pages/Guides/NightmaresMeaning";
import ExBoyfriendDreams from "pages/Guides/ExBoyfriendDreams";
import DeathRelatedDreams from "pages/Guides/DeathRelatedDreams";
import FlyingDreams from "pages/Guides/FlyingDreams";
import SnakeDreams from "pages/Guides/SnakeDreams";
import RecurringDreams from "pages/Guides/RecurringDreams";

import { DreamAnalyser } from "./loadable";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 2,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "personal insights",
        collapse: [
          {
            name: "dream analyser",
            route: "/",
            component: <DreamAnalyser />,
          },
          // {
          //   name: "home",
          //   route: "/",
          //   component: <Home />,
          // },
          // {
          //   name: "videos",
          //   route: "/videos",
          //   component: <VideosHome />,
          // },
          {
            name: "guides",
            route: "/guides",
            component: <GuidesHome />,
          },
        ],
      },
      {
        name: "main",
        collapse: [
          {
            name: "home",
            route: "/",
            component: <Home />,
          },
          {
            name: "shop (coming soon)",
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
        name: "death related dreams",
        route: "/guides/death-related-dreams",
        component: <DeathRelatedDreams />,
      },
      {
        name: "dreaming about your ex",
        route: "/guides/dreaming-about-your-ex",
        component: <AboutEx />,
      },
      {
        name: "dreams about flying",
        route: "/guides/dreams-about-flying",
        component: <FlyingDreams />,
      },
      {
        name: "dreams about snakes",
        route: "/guides/dreams-about-snakes",
        component: <SnakeDreams />,
      },
      {
        name: "Ex boyfriend dreams",
        route: "/guides/ex-boyfriend-dreams",
        component: <ExBoyfriendDreams />,
      },
      {
        name: "lucid dreams intro",
        route: "/guides/lucid-dreams-meaning",
        component: <LucidDreams />,
      },
      {
        name: "nightmares explained",
        route: "/guides/nightmares-explained",
        component: <NightmaresMeaning />,
      },
      {
        name: "recurring dreams",
        route: "/guides/recurring-dreams",
        component: <RecurringDreams />,
      },
      {
        name: "spiritual meaning: dreaming about your ex",
        route: "/guides/spiritual-meaning-dreaming-about-ex",
        component: <SpiritualAboutEx />,
      },
      {
        name: "teeth falling out",
        route: "/guides/teeth-falling-out",
        component: <TeethFallingOut />,
      },
    ],
  },
  // {
  //   name: "account",
  //   icon: <Icon>contacts</Icon>,
  //   collapse: [
  //     {
  //       name: "sign in",
  //       route: "/sign-in",
  //       component: <SignInBasicPage />,
  //     },
  //     {
  //       name: "sign up",
  //       route: "/sign-up",
  //       component: <SignUpPage />,
  //     },
  //   ],
  // },
];

export default routes;
