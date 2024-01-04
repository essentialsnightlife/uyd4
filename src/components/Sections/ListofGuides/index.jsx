import React from "react";

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Components
import FaqCollapse from "components/FaqCollapse";
import HyperlinkAnimation from "components/HyperlinkAnimation";

function ListOfGuides() {
  const [collapse, setCollapse] = useState(false);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <MKTypography variant="h2" align="center" fontWeight="bold" gutterBottom>
              View All Dream Guides
            </MKTypography>
            <MKBox mb={2}>
              <MKTypography variant="body2" align="center" color="text">
                Choose a topic and tap/click it to view all the guides related to it.
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={10}>
            <FaqCollapse
              title="Previous Relationships"
              open={collapse === 1}
              onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Dreaming About Your Ex",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                        link: "guides/dreaming-about-your-ex",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Spiritual Meaning: Dreaming About Your Ex",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                        link: "guides/spiritual-meaning-dreaming-about-ex",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Ex Boyfriend Dreams",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                        link: "guides/ex-boyfriend-dreams",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </FaqCollapse>
            <FaqCollapse
              title="Symbolic Dreams"
              open={collapse === 2}
              onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Death Related Dreams",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                        link: "guides/death-related-dreams",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Dreams About Snakes",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                        link: "guides/dreams-about-snakes",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Teeth Falling Out",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                        link: "guides/teeth-falling-out",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </FaqCollapse>
            <FaqCollapse
              title="Various Dream Experiences"
              open={collapse === 3}
              onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Dreams About Flying",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                        link: "guides/dreams-about-flying",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Lucid Dreams Intro",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                        link: "guides/lucid-dreams-meaning",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Nightmares Explained",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                        link: "guides/nightmares-explained",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Recurring Dreams",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                        link: "guides/recurring-dreams",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </FaqCollapse>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ListOfGuides;
