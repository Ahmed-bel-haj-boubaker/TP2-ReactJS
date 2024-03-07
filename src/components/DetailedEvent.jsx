import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEventById, findById } from "../service/api";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Event() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the event details for the specified event ID
        const selectedEvent = await findById(eventId);

        if (selectedEvent) {
          // Update the state with the fetched event details
          setEvent(selectedEvent);
        } else {
          console.error("Event not found or error fetching event details.");
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    }

    fetchData();
  }, [eventId]);

  const deleteEvent = async () => {
    console.log(event.id);
    const response = await deleteEventById(event.id);
    navigate(-1);
    return response;
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button onClick={() => navigate(-1)}>Redirect to home page </button>
      <button>
        <Link to={`/update/${event.id}`}>UPDATE</Link>
      </button>
      <Button variant="danger" onClick={deleteEvent}>
        delete
      </Button>
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
