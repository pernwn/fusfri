// Udviklet af Nor

import CalendarComponent from "../components/CalendarComponent";
import "../App.css";
import { Typography } from "@mui/material";
import Carrousel from "../components/Carrousel";
import React, { useEffect, useState } from "react";

// Definition af funktionel komponent 'Calendar'
export default function Calendar() {
  // State-hook til at håndtere billed-URL'er
  const [imageUrls, setImageUrls] = useState([]);

  // Effekt-hook til at hente data, når komponenten er blevet indlæst
  useEffect(() => {
    async function getData() {
      try {
        // Foretag et API-kald til WordPress for at hente data fra et specifikt indlæg
        const response = await fetch("https://wordpress.vicw.dk/wp-json/wp/v2/posts/162");
        const data = await response.json();

        // Opret et midlertidigt DOM-element til at analysere HTML-indholdet
        const tempElement = document.createElement("div");
        tempElement.innerHTML = data.content.rendered;

        // Find alle billedelementer inden for HTML-indholdet
        const imageElements = tempElement.querySelectorAll("img");

        // Udtræk billed-URL'erne
        const urls = Array.from(imageElements).map((img) => img.src);

        // Opdater billed-URL'erne i state
        setImageUrls(urls);
      } catch (error) {
        console.error("Fejl ved hentning af data:", error);
      }
    }

    // Kald funktionen for at hente data
    getData();
  }, []); // Kør effekt-hooket kun ved komponentens indlæsning (tom afhængighedsliste)

  return (
    <main>
      <div>
        {/* Typography-komponent til at vise overskrift */}
        <Typography variant="h2" className="calenderhead">
          Året på Fusfri
        </Typography>
      </div>

      {/* Indlejring af CalendarComponent for at vise kalenderen */}
      <CalendarComponent />

      <div className="carrouselContainer">
        {/* Indlejring af Carrousel-komponenten med billed-URL'er som egenskab */}
        <Carrousel images={imageUrls} />
      </div>
    </main>
  );
}
