import * as React from "react";

import { useRef, useState } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Steps() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [swiperEl, setSwiperEl] = useState(null);

  const slideTo = (index) => swiperEl && swiperEl.slideTo(index);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1609365635346-524d0024684f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80",
      label: "Positives",
      title: "Growth",
      description:
        "Teeth falling out symbolize significant change and personal growth, indicating a transition or transformation in life.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1696789990524-e1282ade1bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      label: "Positives",
      title: "Destress",
      description:
        "Dreams of teeth falling out provide an outlet for releasing stress and anxiety, helping cope with and confront concerns.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=974&q=80",
      label: "Challenges",
      title: "Insecurity & Anxiety",
      description:
        "Teeth's connection to personal identity can manifest as dreams of teeth falling out if we feel insecure about ourselves.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1696835766318-e102285eb088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=974&q=80",
      label: "Challenges",
      title: "Loss of Power",
      description:
        "Dreams of teeth falling out symbolize the fear of losing control, reflecting our subconscious longing for strength and influence.",
    },
  ];

  const steps = [
    {
      number: "01",
      label: slides[0].title,
    },
    {
      number: "02",
      label: slides[1].title,
    },
    {
      number: "03",
      label: slides[2].title,
    },
    {
      number: "04",
      label: slides[3].title,
    },
  ];

  // Swiper navigation buttons styles
  const navigationStyles = {
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 0.15s ease",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  return (
    <MKBox component="section" py={4} position="relative">
      <Container>
        <Swiper
          onInit={(swiper) => {
            setSwiperEl(swiper);

            const { navigation: nav } = swiper.params;
            const { navigation } = swiper;

            nav.prevEl = navigationPrevRef.current;
            nav.nextEl = navigationNextRef.current;
            navigation.init();
            navigation.update();
          }}
          autoplay={{ delay: 5000 }}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={false}
          loop
        >
          {slides.map(({ image, label, title, description }) => (
            <SwiperSlide key={label}>
              <Grid container spacing={3} alignItems="center" sx={{ mb: { xs: 6, md: 0 } }}>
                <Grid item xs={12} md={5} ml={{ xs: 0, lg: "auto" }}>
                  <MKBox p={2}>
                    <MKBox
                      component="img"
                      src={image}
                      alt={title}
                      width="100%"
                      borderRadius="xl"
                      maxHeight="37.5rem"
                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={5} mr={{ xs: 0, lg: "auto" }} position="relative">
                  <MKTypography
                    component="h6"
                    variant="button"
                    opacity={0.7}
                    textTransform="uppercase"
                    fontWeight="bold"
                  >
                    {label}
                  </MKTypography>
                  <MKTypography
                    variant="h1"
                    fontWeight="bold"
                    sx={{
                      fontSize: ({ typography: { d3, d4 } }) => ({
                        xs: d4.fontSize,
                        lg: d3.fontSize,
                      }),
                    }}
                  >
                    {title}
                  </MKTypography>
                  <MKTypography variant="body1" my={3}>
                    {description}
                  </MKTypography>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
          <MKBox
            display="flex"
            position="absolute"
            bottom={{ xs: 0, lg: "10%" }}
            right="5%"
            zIndex={2}
          >
            <MKTypography
              variant="h2"
              ref={navigationPrevRef}
              color="dark"
              mr={{ xs: 8, md: 2, lg: 8 }}
              sx={navigationStyles}
            >
              <MKBox className="fas fa-chevron-left" />
            </MKTypography>
            <MKTypography variant="h2" ref={navigationNextRef} color="dark" sx={navigationStyles}>
              <MKBox className="fas fa-chevron-right" />
            </MKTypography>
          </MKBox>
        </Swiper>
        <Grid container mt={12}>
          {steps.map(({ number, label }, index) => (
            <Grid key={label} item xs={6} lg={3} textAlign="center">
              <MKTypography
                variant="body1"
                color="primary"
                fontWeight="bold"
                pl={2}
                textGradient
                sx={{ fontFamily: ({ typography: { h1 } }) => h1.fontFamily, cursor: "pointer" }}
                onClick={() => slideTo(index)}
              >
                <MKBox component="span">{number}</MKBox>
                <MKBox component="span" ml={1}>
                  {label}
                </MKBox>
              </MKTypography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Steps;
