// Udviklet af Nor
import { Container, Typography } from "@mui/material";
import ContactForm from "../components/contactform";
import "../App.css";
import kontaktfoto from "../assets/kontaktfoto.jpeg";
import React, { useState, useEffect } from "react";
import MediaCard from "../components/MediaCard";

export default function Kontakt() {
  const [post1, setPost1] = useState(null);
  const [post2, setPost2] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response1 = await fetch("https://wordpress.vicw.dk/wp-json/wp/v2/posts/278");
        const response2 = await fetch("https://wordpress.vicw.dk/wp-json/wp/v2/posts/276");

        if (!response1.ok || !response2.ok) {
          throw new Error("Failed to fetch posts");
        }

        const postData1 = await response1.json();
        const postData2 = await response2.json();

        setPost1(postData1);
        setPost2(postData2);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container component="main">
      <Typography variant="h3" className="calenderhead">
        Spørgsmål? Skriv til os her
      </Typography>
      <ContactForm />

      <div className="fotoinfo">
        <div>
          <img src={kontaktfoto} alt="Foto af personale med barn" height={350} />
        </div>

        <div className="infoContainer">
          <div>
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/phone--v1.png" alt="phone--v1" />
            <Typography variant="h5">+45 51 72 47 63</Typography>
          </div>
          <div className="email">
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/new-post.png" alt="new-post" />
            <Typography variant="h5">admin@fusfriskole.dk</Typography>
          </div>
        </div>
      </div>

      <div className="mediaCards">
        <MediaCard post={post1} />

        <MediaCard post={post2} />
      </div>
    </Container>
  );
}
