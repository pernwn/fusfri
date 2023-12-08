// Udviklet af Nor

import CalendarComponent from "../components/CalendarComponent";
import "../App.css";
import { Typography } from "@mui/material";
import React from "react";
import Carrousel from "../components/Carrousel";

export default function Calendar() {
  const images = ["", "", ""];

  return (
    <main>
      <div>
        <Typography variant="h2" className="calenderhead">
          Året på Fusfri
        </Typography>
      </div>
      <CalendarComponent />
      <Carrousel images={images} />
    </main>
  );
}
