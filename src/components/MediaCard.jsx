// Udviklet af Nor

import React, { useState, useEffect } from "react";

// Import af Material-UI komponenter fra @mui/material-biblioteket
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Definition af MediaCard-funktionen som en funktionel komponent
const MediaCard = ({ post }) => {
  // State-hook til håndtering af medieoplysninger
  const [media, setMedia] = useState(null);

  // Effekt-hook til at hente medieoplysninger, når komponenten er blevet indlæst
  useEffect(() => {
    const fetchMedia = async () => {
      // Kontroller, om indlægget har et fremhævet medie
      if (post.featured_media === 0) {
        // Hent linket til mediefilen fra indlæggets links
        const mediaLink = post._links["wp:attachment"][0].href;
        // Foretag et API-kald for at hente medieoplysningerne
        const response = await fetch(mediaLink);
        const mediaData = await response.json();
        // Opdater state med medieoplysningerne
        setMedia(mediaData);
      }
    };

    // Kald funktionen for at hente medieoplysninger
    fetchMedia();
  }, [post]); // Kør effekt-hooket igen, hvis 'post' ændres

  // Hvis 'post' ikke er defineret, returner null
  if (!post) {
    return null;
  }

  // Udpak data fra 'post' objektet
  const { featured_media, title, content } = post;
  // Hent URL'en for mediebilledet, eller brug null, hvis der ikke er nogen
  const { source_url } = featured_media !== 0 ? featured_media : media || {};

  // JSX for at vise Material-UI Card med billedet og indholdet fra indlægget
  return (
    <Card sx={{ maxWidth: 440, maxHeight: 400 }}>
      {source_url ? (
        <CardMedia component="img" height="140" image={source_url} alt={title?.rendered || "Billede Alt Tekst"} />
      ) : (
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {title?.rendered || "Fallback Titel"}
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

// Eksportér MediaCard-funktionen som standard eksport
export default MediaCard;
