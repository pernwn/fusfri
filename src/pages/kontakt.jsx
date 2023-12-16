// Udviklet af Nor

// Import af Container og Typography-komponenterne fra @mui/material-biblioteket
import { Container, Typography } from "@mui/material";
import ContactForm from "../components/contactform";
import "../App.css";
import kontaktfoto from "../assets/kontaktfoto.jpeg";
import React, { useState, useEffect } from "react";
import MediaCard from "../components/MediaCard";

// Definition af funktionel komponent 'Kontakt'
export default function Kontakt() {
  // State-hooks til at håndtere WordPress-posts, fejl og loading status
  const [post1, setPost1] = useState(null);
  const [post2, setPost2] = useState(null);
  const [error, setError] = useState(null);

  // Effekt-hook til at hente WordPress-posts, når komponenten er blevet indlæst
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Foretag API-kald for at hente data fra to specifikke WordPress-indlæg
        const response1 = await fetch("https://wordpress.vicw.dk/wp-json/wp/v2/posts/278");
        const response2 = await fetch("https://wordpress.vicw.dk/wp-json/wp/v2/posts/276");

        // Kast en fejl, hvis et af API-kaldene fejler
        if (!response1.ok || !response2.ok) {
          throw new Error("Fejl ved hentning af indlæg");
        }

        // Udtræk data fra API-responserne
        const postData1 = await response1.json();
        const postData2 = await response2.json();

        // Opdater state med WordPress-posts
        setPost1(postData1);
        setPost2(postData2);
      } catch (error) {
        // Opdater state med fejlmeddelelse, hvis der opstår en fejl ved hentning af data
        setError(error.message);
      }
    };

    // Kald funktionen for at hente data
    fetchPosts();
  }, []);

  // JSX for at vise indholdet i Kontakt-komponenten
  return (
    <Container component="main">
      <Typography variant="h3" className="calenderhead">
        Spørgsmål? Skriv til os her
      </Typography>

      {/* Indlejring af ContactForm-komponenten for at vise kontaktformularen */}
      <ContactForm />

      <div className="fotoinfo">
        <div>
          {/* Visning af kontaktfoto */}
          <img src={kontaktfoto} alt="Foto af personale med barn" height={350} />
        </div>

        <div className="infoContainer">
          <div>
            {/* Visning af telefonikon og telefonnummer */}
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/phone--v1.png" alt="phone--v1" />
            <Typography variant="h5">+45 51 72 47 63</Typography>
          </div>
          <div className="email">
            {/* Visning af e-mailikon og e-mailadresse */}
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/new-post.png" alt="new-post" />
            <Typography variant="h5">admin@fusfriskole.dk</Typography>
          </div>
        </div>
      </div>

      <div className="mediaCards">
        {/* Indlejring af MediaCard-komponenten for at vise WordPress-posts */}
        <MediaCard post={post1} />
        <MediaCard post={post2} />
      </div>
    </Container>
  );
}
