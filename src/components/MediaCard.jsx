// Udviklet af Nor

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MediaCard = ({ post }) => {
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      if (post.featured_media === 0) {
        const mediaLink = post._links["wp:attachment"][0].href;
        const response = await fetch(mediaLink);
        const mediaData = await response.json();
        setMedia(mediaData);
      }
    };

    fetchMedia();
  }, [post]);

  if (!post) {
    return null;
  }

  const { featured_media, title, content } = post;
  const { source_url } = featured_media !== 0 ? featured_media : media || {};

  return (
    <Card sx={{ maxWidth: 440, maxHeight: 400 }}>
      {source_url ? (
        <CardMedia component="img" height="140" image={source_url} alt={title?.rendered || "Image Alt Text"} />
      ) : (
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {title?.rendered || "Fallback Title"}
          </Typography>
        </div>
      )}
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: content?.rendered || "" }}
        />
      </CardContent>
    </Card>
  );
};

export default MediaCard;
