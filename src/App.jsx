import { useEffect, useState } from "react";
import eventsData from "./data/events.json";
import "./App.css";
import Events from "./components/Events";
import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./components/DetailedEvent";

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
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Events events={events} />} />
          <Route path="/eventDetails/:eventId" element={<Event/>}/>
        </Routes>
      </Router>
    </EventsContext.Provider>
    </>
  );
}

export default App;
