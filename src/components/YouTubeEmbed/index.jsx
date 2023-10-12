import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import MKTypography from "components/MKTypography";

const useStyles = makeStyles(() => ({
  videoContainer: {
    position: "relative",
    width: 560,
    height: 315,
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

// note that preview doesn't work if viewing via localhost
// see https://stackoverflow.com/questions/51969269/embedded-youtube-video-doesnt-work-on-local-server
const YoutubeEmbed = ({ embedId, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.videoContainer}>
      <MKTypography variant="h6" gutterBottom mb={1}>
        {title}
      </MKTypography>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/${embedId}`}
        style={{ width: "70%", height: "70%" }}
        title={title}
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
