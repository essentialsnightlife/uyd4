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
              title="Common types of Dreams"
              open={collapse === 1}
              onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Dreaming about your ex",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Repeated Dreams",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Teeth falling out",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </FaqCollapse>
            <FaqCollapse
              title="Lucid Dreaming"
              open={collapse === 2}
              onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Introduction to Lucid Dreaming",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </FaqCollapse>
            <FaqCollapse
              title="Nightmares"
              open={collapse === 3}
              onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <HyperlinkAnimation
                      content={{
                        text: "Having Nightmares Explained",
                        icon: "arrow_forward",
                        iconWeight: "bold",
                        fontSize: "1.19rem",
                        fontWeight: "regular",
                        color: "info",
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
