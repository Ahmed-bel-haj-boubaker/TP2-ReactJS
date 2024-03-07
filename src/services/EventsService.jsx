import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { addEvent } from "../service/api";

function EventsService() {
  const [eventItem, setEventItem] = useState({
    id:"",
    name: "",
    description: "",
    img: "",
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
  });

  const onChangeValue = (e) => {
    setEventItem({ ...eventItem, [e.target.name]: e.target.value });
    console.log(eventItem);
  };

  const sendData = async () => {
    console.log(eventItem);
    
    const data = await addEvent(eventItem);
    console.log(data);
  };

  return (
    <Row className="justify-content-md-center">
      <Col md="9">
        <Form>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => {
                onChangeValue(e);
              }}
              value={eventItem.name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>description</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="description"
              name="description"
              onChange={(e) => {
                onChangeValue(e);
              }}
              value={eventItem.description}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Price"
              name="price"
              onChange={(e) => {
                onChangeValue(e);
              }}
              value={eventItem.price}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>nbTickets</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="nbTickets"
              name="nbTickets"
              onChange={(e) => {
                onChangeValue(e);
              }}
              value={eventItem.nbTickets}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>nbParticipants</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="nbParticipants"
              name="nbParticipants"
              onChange={(e) => {
                onChangeValue(e);
              }}
              value={eventItem.nbParticipants}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Button type="primary" onClick={sendData}>
            Submit Form
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default EventsService;
