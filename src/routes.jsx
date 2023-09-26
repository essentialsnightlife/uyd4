import React from "react";

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "src/layouts/pages/company/about-us";
import Pricing from "src/layouts/pages/company/pricing";
import HelpCenter from "src/layouts/pages/support/help-center";
import ContactUs from "src/layouts/pages/support/contact-us";
import Faq from "src/layouts/pages/support/faq";
import Privacy from "src/layouts/pages/support/privacy";
import SingleArticle from "pages/Guides/SingleArticle/index.jsx";
import Author from "src/layouts/pages/blogs/author";
import DreamAnalyser from "pages/LandingPages/DreamAnalyser";
import SavedDreams from "pages/LandingPages/SavedDreams";
import GuidesHome from "pages/LandingPages/GuidesHome";
import Home from "pages/LandingPages/Home";
import VideosHome from "pages/LandingPages/VideosHome";

// Account
import SignInBasicPage from "src/layouts/authentication/sign-in/basic";
import SignInCoverPage from "src/layouts/authentication/sign-in/cover";
import SignInIllustration from "src/layouts/authentication/sign-in/illustration";
import SignInSimplePage from "src/layouts/authentication/sign-in/simple";
import SignUpCoverPage from "src/layouts/authentication/sign-up/cover";
import ResetPasswordPage from "src/layouts/authentication/reset-password/cover";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 3,
    rowsPerColumn: 2,
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
            route: "/pages/landing-pages/dream-analyser",
            component: <DreamAnalyser />,
          },
          {
            name: "saved dreams",
            route: "/pages/landing-pages/saved-dreams",
            component: <SavedDreams />,
          },
          {
            name: "videos",
            route: "/pages/landing-pages/videos",
            component: <VideosHome />,
          },
          {
            name: "guides",
            route: "/pages/guides",
            component: <GuidesHome />,
          },
        ],
      },
      {
        name: "company",
        collapse: [
          {
            name: "about us",
            route: "/pages/company/about-us",
            component: <AboutUs />,
          },
          {
            name: "pricing",
            route: "/pages/company/pricing",
            component: <Pricing />,
          },
        ],
      },
      {
        name: "support",
        collapse: [
          {
            name: "help center",
            route: "/pages/support/help-center",
            component: <HelpCenter />,
          },
          {
            name: "contact us",
            route: "/pages/support/contact-us",
            component: <ContactUs />,
          },
          {
            name: "faq",
            route: "/pages/support/faq",
            component: <Faq />,
          },
          {
            name: "privacy",
            route: "/pages/support/privacy",
            component: <Privacy />,
          },
        ],
      },
      {
        name: "blogs",
        collapse: [
          {
            name: "single article",
            route: "/pages/blogs/single-article",
            component: <SingleArticle />,
          },
          {
            name: "author",
            route: "/pages/blogs/author",
            component: <Author />,
          },
        ],
      },
    ],
  },
  {
    name: "account",
    icon: <Icon>contacts</Icon>,
    collapse: [
      {
        name: "sign in",
        dropdown: true,
        collapse: [
          {
            name: "basic",
            route: "/authentication/sign-in/basic",
            component: <SignInBasicPage />,
          },
          {
            name: "cover",
            route: "/authentication/sign-in/cover",
            component: <SignInCoverPage />,
          },
          {
            name: "illustration",
            route: "/authentication/sign-in/illustration",
            component: <SignInIllustration />,
          },
          {
            name: "simple",
            route: "/authentication/sign-in/simple",
            component: <SignInSimplePage />,
          },
        ],
      },
      {
        name: "sign up",
        dropdown: true,
        collapse: [
          {
            name: "cover",
            route: "/authentication/sign-up/cover",
            component: <SignUpCoverPage />,
          },
        ],
      },
      {
        name: "reset password",
        dropdown: true,
        collapse: [
          {
            name: "cover",
            route: "/authentication/reset-password/cover",
            component: <ResetPasswordPage />,
          },
        ],
      },
    ],
  },
  {
    name: "docs",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "getting started",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "foundation",
        description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "components",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
];

export default routes;
