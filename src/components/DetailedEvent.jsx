import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import eventsData from "../data/events.json";

export default function Event() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
   
    console.log(eventId)

    const selectedEvent = eventsData.find(e => e.id === parseInt(eventId));
    setEvent(selectedEvent);
    console.log(selectedEvent)
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{event.name}</h2>
      <p>Description: {event.description}</p>

    </div>
  );
}
