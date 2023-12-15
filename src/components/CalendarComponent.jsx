// Udviklet af Nor

import { useEffect, useState } from "react";
import "../App.css";

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  // Opstarter Google Calender API, og fortager API kald
  const init = async () => {
    try {
      await window.gapi.load("client", async () => {
        await window.gapi.client.load("calendar", "v3");
        await window.gapi.client.init({
          apiKey: "AIzaSyDoh3L14VpOaZihK9kiB7vxQIicbNn-Lsg",
        });

        const currentYear = new Date().getFullYear();

        // Make API request to get calendar events
        const response = await window.gapi.client.calendar.events.list({
          calendarId: "88bc95f476da329749546fb7eaf2e95a78178e2e0274f8fb6de6efb8e5947e31@group.calendar.google.com",
          timeMax: new Date(`${currentYear}-12-31T23:59:59Z`).toISOString(),
          showDeleted: false,
          singleEvents: true,
          orderBy: "startTime",
          maxResults: 10,
        });

        console.log("API response:", response);

        const fetchedEvents = response.result && response.result.items ? response.result.items : [];
        console.log("Fetched calendar events:", fetchedEvents);

        setEvents(fetchedEvents);
      });
    } catch (error) {
      console.error("Error initializing or fetching calendar events:", error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const displayEvents = (events) => {
    return events.map((event) => {
      const startDate = new Date(event.start.dateTime || event.start.date);

      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "Europe/Copenhagen",
      };

      // Formating the date and time
      const formattedDate = startDate.toLocaleString("en-UK", options);

      return (
        <li key={event.id}>
          <strong>{event.summary}</strong>
          <br />
          <span>{formattedDate}</span>
        </li>
      );
    });
  };

  return (
    <div>
      <ul id="events-list">{displayEvents(events)}</ul>
    </div>
  );
};

export default CalendarComponent;
