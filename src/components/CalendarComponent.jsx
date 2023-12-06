import React, { useEffect } from "react";

const CalendarComponent = () => {
  useEffect(() => {
    const init = () => {
      // Initialize the Google Calendar API
      window.gapi.load("client", () => {
        window.gapi.client
          .init({
            apiKey: "AIzaSyDoh3L14VpOaZihK9kiB7vxQIicbNn - Lsg", // Replace with your actual API key
          })
          .then(() => {
            // Make API request to get calendar events
            window.gapi.client.calendar.events
              .list({
                calendarId: "primary",
                timeMin: new Date().toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults: 10,
                orderBy: "startTime",
              })
              .then((response) => {
                const events = response.result.items;
                displayEvents(events);
              });
          });
      });
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
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>Your Calendar Events</h1>
      <ul id="events-list"></ul>
    </div>
  );
};

export default CalendarComponent;
