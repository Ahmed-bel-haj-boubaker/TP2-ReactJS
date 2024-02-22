import { Suspense, useEffect, useState } from "react";
import eventsData from "./data/events.json";
import "./App.css";
import Events from "./components/Events";
import React from "react";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Event from "./components/DetailedEvent";
import NotFound from "./components/NotFound";
import EventLayout from "./components/EventLayout";
import About from "./components/About";

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
  const About = React.lazy(() => import("./components/About"));
  const EventLayout = React.lazy(() => import("./components/EventLayout"));

  return (
    <>
      <EventsContext.Provider value={setEvents}>
        <NavBar />
        <Suspense fallback={<p>chargement ....</p>}>
          <Routes>
            <Route path="/events" element={<EventLayout />}>
              <Route index element={<Events events={events} />} />
              <Route path=":eventId" element={<Event />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </EventsContext.Provider>
    </>
  );
}

export default App;
