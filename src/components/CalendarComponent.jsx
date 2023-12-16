// Udviklet af Nor

// Import af React-hooks fra react-biblioteket
import { useEffect, useState } from "react";
import "../App.css";
import CommentSection from "./calendarcomments";

// Definition af CalendarComponent-funktionen som en funktionel komponent
const CalendarComponent = () => {
  // State-hook til at håndtere kalenderbegivenheder
  const [events, setEvents] = useState([]);

  // Funktion til initialisering af Google Calendar API og udførelse af API-kald
  const init = async () => {
    try {
      // Vent på, at gapi-biblioteket indlæses, og initialisér derefter Google Calendar API
      await window.gapi.load("client", async () => {
        await window.gapi.client.load("calendar", "v3");
        await window.gapi.client.init({
          apiKey: "AIzaSyDoh3L14VpOaZihK9kiB7vxQIicbNn-Lsg",
        });

        // Hent det nuværende år
        const currentYear = new Date().getFullYear();

        // Lav et API-kald for at få kalenderbegivenheder
        const response = await window.gapi.client.calendar.events.list({
          calendarId: "88bc95f476da329749546fb7eaf2e95a78178e2e0274f8fb6de6efb8e5947e31@group.calendar.google.com",
          timeMin: new Date(`${currentYear}-01-01T00:00:00Z`).toISOString(),
          timeMax: new Date(`${currentYear}-12-31T23:59:59Z`).toISOString(),
          showDeleted: false,
          singleEvents: true,
          orderBy: "startTime",
        });

        // Hent kalenderbegivenheder fra API-responsen, eller brug en tom liste, hvis der ikke er nogen
        const fetchedEvents = response.result && response.result.items ? response.result.items : [];

        // Opdater tilstanden med de hentede begivenheder
        setEvents(fetchedEvents);
      });
    } catch (error) {
      console.error("Fejl ved initialisering eller hentning af kalenderbegivenheder:", error);
    }
  };

  // Effekt-hook til at kalde init-funktionen ved komponentens indlæsning
  useEffect(() => {
    init();
  }, []);

  // Funktion til at vise kalenderbegivenheder
  const displayEvents = (events) => {
    return events.map((event) => {
      const startDate = new Date(event.start.dateTime || event.start.date);
      const endDate = new Date(event.end.dateTime || event.end.date);

      // Konfiguration af options-objektet til dato- og tidsformatering
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "Europe/Copenhagen",
      };

      // Formatering af start- og slutdato og -tid
      const formattedDate = startDate.toLocaleString("en-UK", options);
      const formattedEndDate = endDate.toLocaleString("en-UK", options);

      // Returner JSX for hver begivenhed
      return (
        <li key={event.id} className="event">
          <strong>{event.summary}</strong>
          <br />
          <span>Starter: {formattedDate}</span>
          <br />
          <span>Slutter: {formattedEndDate}</span>
        </li>
      );
    });
  };

  // JSX for at vise kalenderkomponenten
  return (
    <div>
      <ul id="events-list">{displayEvents(events)}</ul>
      <CommentSection />
    </div>
  );
};

export default CalendarComponent;
