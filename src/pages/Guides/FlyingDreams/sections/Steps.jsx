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
      title: "Liberation from Everyday Stress",
      description:
        "Flying in dreams can represent a desire to escape from the mundane and discover something new. It can be a way of expressing a need for freedom from the stresses and worries of everyday life.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1642227762846-06f362a45469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      label: "Positives",
      title: "Determination",
      description:
        "Dreams of flying can also be a sign of ambition and ambition to reach new heights of success. The dreamer may be feeling a sense of determination and motivation to achieve something that may seem impossible.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=974&q=80",
      label: "Positives",
      title: "Ambition",
      description:
        "Flying dreams could signify a desire to reach higher goals and gain a sense of accomplishment in life. The dreamer may feel as if they are soaring higher than their peers and reaching new heights of success.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1695206598174-46c01c47c9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=974&q=80",
      label: "Positives",
      title: "Overcoming Obstacles",
      description:
        "Flying dreams can also represent a desire to conquer obstacles in life continue on despite difficult times and to come out on top.",
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
