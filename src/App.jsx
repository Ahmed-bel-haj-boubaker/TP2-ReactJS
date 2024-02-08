import { useEffect, useState } from "react";
import eventsData from "./data/events.json";
import "./App.css";
import Events from "./components/Events";
import React from "react";

export const EventsContext = React.createContext();

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setEvents(eventsData);
      } catch (err) {
        console.log("error in fetching the data : ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <EventsContext.Provider value={setEvents}>
        <Events events={events} />
      </EventsContext.Provider>
    </>
  );
}

export default App;
