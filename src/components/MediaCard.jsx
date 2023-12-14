// Udviklet af Nor

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MediaCard = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 440, maxHeight: 400 }}>
      {post.featured_media && <CardMedia src={post.featured_media.source_url} alt={post.title.rendered} />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title.rendered}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </CardContent>
    </Card>
  );
};

export default MediaCard;
