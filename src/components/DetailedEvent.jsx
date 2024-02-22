import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import eventsData from "../data/events.json";

export default function Event() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(eventId);

    const selectedEvent = eventsData.find((e) => e.id === parseInt(eventId));
    setEvent(selectedEvent);
    console.log(selectedEvent);
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button onClick={() => navigate(-1)}>Redirect to home page </button>
      <br />
      <br />
      <div className="product-details">
        <img
          src={`/images/${event.img}`}
          style={{ width: "300px", height: "200px" }}
        />
        <div className="product-info">
          <h1>{event.name}</h1>
          <p>{event.description}</p>
          <p>Price: DT{event.price}</p>
          <button>Book now !</button>
        </div>
      </div>
    </>
  );
}
