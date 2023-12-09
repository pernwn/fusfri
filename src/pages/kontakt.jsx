// Udviklet af Nor

import React from "react";
import { Container, Typography } from "@mui/material";
import ContactForm from "../components/contactform";

export default function Kontakt() {
  return (
    <Container component="main">
      <Typography variant="h3" className="calenderhead">
        Spørgsmål? Skriv til os her
      </Typography>
      <ContactForm />
    </Container>
  );
}
