// Udviklet af Nor

import React from "react";
import { Container, Typography } from "@mui/material";
import ContactForm from "../components/contactform";
import "../App.css";
import kontaktfoto from "../assets/kontaktfoto.jpeg";

export default function Kontakt() {
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
    </Container>
  );
}
