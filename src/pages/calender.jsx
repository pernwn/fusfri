// Udviklet af Nor

// Udviklet af Nor

import CalendarComponent from "../components/CalendarComponent";
import "../App.css";
import { Typography } from "@mui/material";

import Carrousel from "../components/Carrousel";
import React, { useEffect, useState } from "react";

export default function Calendar() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://wordpress.vicw.dk/wp-json/wp/v2/posts/162");
        const data = await response.json();

        // Create a temporary DOM element to parse the HTML content
        const tempElement = document.createElement("div");
        tempElement.innerHTML = data.content.rendered;

        // Find all image elements within the HTML content
        const imageElements = tempElement.querySelectorAll("img");

        // Extract the image URLs
        const urls = Array.from(imageElements).map((img) => img.src);

        // Set the image URLs in the state
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  return (
    <main>
      <div>
        <Typography variant="h2" className="calenderhead">
          Året på Fusfri
        </Typography>
      </div>
      <CalendarComponent />
      <div className="carrouselContainer">
        <Carrousel images={imageUrls} />
      </div>
    </main>
  );
}
