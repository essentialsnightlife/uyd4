import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function VideoCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/adc29613-bd86-46bc-8afe-f735a64103d5/d3409fh-2bfd7bfb-12c5-4918-ad27-bbb13b0a295f.jpg/v1/fit/w_828,h_1242,q_70,strp/contemplative_reptile_6120858_by_stockproject1_d3409fh-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY4OCIsInBhdGgiOiJcL2ZcL2FkYzI5NjEzLWJkODYtNDZiYy04YWZlLWY3MzVhNjQxMDNkNVwvZDM0MDlmaC0yYmZkN2JmYi0xMmM1LTQ5MTgtYWQyNy1iYmIxM2IwYTI5NWYuanBnIiwid2lkdGgiOiI8PTExMjUifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8FLV9JsbHBdPgwl-5zYh7cEYNkw7BkfZgG5qc-Hj-Q8"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon sx={{ height: 60, width: 60, ml: -1 }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default VideoCard;
