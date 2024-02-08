/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import { EventsContext } from "../App";
import Alert from "react-bootstrap/Alert";

function Events({ events }) {
  const [showAlert, setShowAlert] = useState(false);
  const setEvents = useContext(EventsContext);
  const [showWelcome, setShowWelcome] = useState(false);

  const buy = (eventId) => {
    const updatedEvents = [...events];
    const eventIndex = updatedEvents.findIndex((event) => event.id === eventId);
    if (eventIndex !== -1) {
      updatedEvents[eventIndex].nbParticipants += 1;
      updatedEvents[eventIndex].nbTickets -= 1;
      setEvents(updatedEvents);
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };
  const liked =(eventId) =>{
    const updatedEvents = [...events];
    const eventIndex = updatedEvents.findIndex((event) => event.id === eventId);
    console.log(updatedEvents[eventIndex].like)

    if ( updatedEvents[eventIndex].like === true){
          updatedEvents[eventIndex].like = false;
          setEvents(updatedEvents);
        }else if( updatedEvents[eventIndex].like === false){
         updatedEvents[eventIndex].like = true;
         setEvents(updatedEvents);
        } 
  }

useEffect(()=>{
    setShowWelcome(true);
    const timer = setTimeout(()=>{
        setShowWelcome(false);
    },3000);
    return () => clearTimeout(timer);
},[])

  return (
    <>
      {showWelcome && (
        <Alert variant="info" onClose={() => setShowWelcome(false)} dismissible>
          Welcome to our events! Enjoy your time!
        </Alert>
      )}
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          You have booked an event
        </Alert>
      )}
      {events.map((event) => (
        <Card style={{ width: "18rem" }} key={event.id}>
          {event.nbTickets === 0 ? (
            <Card.Img variant="top" src={`../public/images/sold_out.png`} />
          ) : (
            <Card.Img variant="top" src={`/images/${event.img}`} />
          )}
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text style={{ fontWeight: "bold" }}>
              price : {event.price}$
            </Card.Text>
            <Card.Text>number of tickets : {event.nbTickets}</Card.Text>
            <Card.Text>
              number of Participant : {event.nbParticipants}
            </Card.Text>
            {event.nbTickets === 0 ? (
              <Button variant="secondary" disabled>
                Sold Out
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => {
                  buy(event.id);
                }}
              >
                Book an event
              </Button>
            )}

           { event.like === true ? (
             <Button
             variant="primary"
             onClick={()=>liked(event.id)}
           >
           Like
           </Button>
           ):(
            <Button
            variant="danger"
            onClick={()=>liked(event.id)}
          >
          Dislike
          </Button>
           )}
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Events;
