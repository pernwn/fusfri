import React, { useEffect } from "react";
import "../App.css";
import { Typography } from "@mui/material";

const CalendarComponent = () => {
  useEffect(() => {
    const init = async () => {
      try {
        // Load the Google API client library
        await window.gapi.load("client", async () => {
          console.log("Google API client library loaded");

          // Load the Google Calendar API
          await window.gapi.client.load("calendar", "v3");

          console.log("Google Calendar API loaded");

          // Initialize the Google Calendar API
          await window.gapi.client.init({
            apiKey: "AIzaSyDoh3L14VpOaZihK9kiB7vxQIicbNn-Lsg", // Replace with your actual API key
          });

          console.log("Google API client initialized successfully");

          // Make API request to get calendar events
          const response = await window.gapi.client.calendar.events.list({
            calendarId: "88bc95f476da329749546fb7eaf2e95a78178e2e0274f8fb6de6efb8e5947e31@group.calendar.google.com",
            timeMin: new Date().toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 10,
            orderBy: "startTime",
          });

          console.log("API response:", response);

          const events = response.result && response.result.items ? response.result.items : [];
          console.log("Fetched calendar events:", events);

          displayEvents(events);
        });
      } catch (error) {
        console.error("Error initializing or fetching calendar events:", error);
      }
    };

    const displayEvents = (events) => {
      const eventsList = document.getElementById("events-list");

      events.forEach((event) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(event.summary));
        eventsList.appendChild(li);
      });
    };

    init();
  }, []);

  return (
    <div>
      <Typography variant="h2">Your Calendar Events</Typography>
      <ul id="events-list"></ul>
    </div>
  );
};

export default CalendarComponent;
