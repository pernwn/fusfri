// Udviklet af Nor

import CalendarComponent from "../components/CalendarComponent";
import "../App.css";
import { Typography } from "@mui/material";

export default function Calendar() {
  return (
    <main>
      <div>
        <Typography variant="h2" className="calenderhead">
          Året på Fusfri
        </Typography>
      </div>
      <CalendarComponent />
    </main>
  );
}
