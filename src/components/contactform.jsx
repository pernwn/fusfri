// Udviklet af Nor

import { useState } from "react";
// Import af styled-components-biblioteket til styling af komponenten
import styled from "styled-components";
// Import af emailjs og react-toastify-bibliotekerne
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

// Styling af contactform.jsx
const FormContainer = styled.div`
  width: 800px;
  margin: auto;
  margin-top: 50px;
  padding-left: 90px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-image: linear-gradient(to bottom right, #6a912d, #dafaa7);
  border-radius: 25px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  margin: 5px 0;
  width: 600px;
  @media (max-width: 768px) {
    max-width: 170px;
  }
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin: 5px 0;
  width: 600px;
  @media (max-width: 768px) {
    max-width: 170px;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  width: 600px;
  background-color: #448d9c;
  transition: background-color 0.3s; /* Tilføj en glidende overgangseffekt */

  &:active {
    background-color: #2a6c7a; /* Mørkere farve ved klik */
  }
  @media (max-width: 768px) {
    max-width: 170px;
  }
`;

// Definition af ContactForm-funktionen som en funktionel komponent
const ContactForm = () => {
  // State-hook til håndtering af formdata
  const [formData, setFormData] = useState({
    navn: "",
    Telefonnummer: "",
    email: "",
    besked: "",
  });

  // Funktion til håndtering af ændringer i input-felter
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Funktion til håndtering af formularindsendelse
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vis en success-toast når e-mailen er sendt
    toast.success("Emailen er sendt", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    try {
      const result = await emailjs.send("service_45av0gf", "template_tyq0pbv", formData, "Bd-JEsYHH89M9RpTm");
    } catch (error) {
      console.error("Fejl ved afsendelse af email:", error);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="navn">Navn:</Label>
        <Input type="text" id="navn" name="navn" value={formData.navn} onChange={handleChange} />

        <Label htmlFor="telefonnummer">Telefonnummer:</Label>
        <Input
          type="tel"
          id="telefonnummer"
          name="telefonnummer"
          value={formData.Telefonnummer}
          onChange={handleChange}
        />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <Label htmlFor="besked">Besked:</Label>
        <TextArea id="besked" name="besked" value={formData.besked} onChange={handleChange} />

        <Button type="submit">Send</Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
