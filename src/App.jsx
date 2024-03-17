import { Suspense, useEffect, useState } from "react";
import "./App.css";

import Events from "./components/Events";
import React from "react";
import NavBar from "./components/Navbar";
import { Routes, Route ,Navigate } from "react-router-dom";
import Event from "./components/DetailedEvent";
import NotFound from "./components/NotFound";
import EventsService from "./services/EventsService";

import { getAllEvent } from "./service/api";
import EventUpdate from "./services/EventUpdate";

export const EventsContext = React.createContext();

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllEvent();
        setEvents(data.data);
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
            {/* Redirect from "/" to "/events" */}
            <Route path="/" element={<Navigate to="/events" />} />
            {/* Define other routes */}
            <Route path="/events" element={<EventLayout />}>
              <Route index element={<Events events={events} />} />
              <Route path=":eventId" element={<Event />} />
            </Route>
            <Route path="/addEvent" element={<EventsService />} />
            <Route path="/update/:id" element={<EventUpdate />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </EventsContext.Provider>
    </>
  );
}

export default App;
