import * as React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import YouTubeEmbed from "components/YouTubeEmbed";

function TextBottom() {
  return (
    <MKBox component="section" py={6} mt={2}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto" flexDirection="column">
          <MKTypography variant="h4" mb={2}>
            Ex boyfriends in modern culture
          </MKTypography>
          <MKTypography variant="body2" mb={6}>
            Diving into the topic of ex boyfriends within the dreamscapes of modern culture, we
            share stories from celebrities who have shared their ex-boyfriend dreams.
          </MKTypography>
          <MKTypography variant="h5" mb={2}>
            Taylor Swift
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            In her song &#39;All Too Well&#39; Taylor Swift reflects on a past relationship,
            including dream sequences where she recalls memories with her ex-boyfriend. The dreams
            and the emotions associated with them play a significant role in the song&#39;s
            narrative, demonstrating the impact of dreaming about an ex on processing past
            experiences.
          </MKTypography>
          <YouTubeEmbed mb={2} embedId={"tollGa3S0o8"} title={"Taylor Swift: All Too Well"} />
          <MKTypography variant="h5" mb={2}>
            Ariana Grande
          </MKTypography>
          <MKTypography variant="body2" mb={2}>
            Furthermore, in the song &#39;Thank U, Next&#39; by Ariana Grande, she mentions dreaming
            about her ex-boyfriends, referencing her personal growth and gratitude for the lessons
            learned from those relationships.
          </MKTypography>
          <YouTubeEmbed mb={3} embedId={"tollGa3S0o8"} title={"Ariana Grande: Thank U, Next"} />
          <MKTypography variant="body2" mb={2}>
            Dreams about ex-boyfriends can have multiple meanings, depending on the context and the
            individual&#39;s underlying continue feelings. They can symbolize our longing for
            security, our fear of being vulnerable in a new relationship, and our need for closure.
            Ultimately, understanding the meaning of a dream about an ex-boyfriend can help us
            better understand ourselves and our emotions.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TextBottom;
