import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { findById, updateEvent } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

function EventUpdate() {
  const param = useParams();
  const navigate = useNavigate();
  const [eventItem, setEventItem] = useState({
    id: "",
    name: "",
    description: "",
    img: "",
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
  });
  console.log(param.id);
  const fetchEvent = async () => {
    const eventResult = await findById(param.id);
    setEventItem(eventResult);
  };

  useEffect(() => {
    fetchEvent(param.id);
  }, []);
  console.log(eventItem);
  const onChangeValue = (e) => {
    setEventItem({ ...eventItem, [e.target.name]: e.target.value });
    console.log(eventItem);
  };

  const sendData = async () => {
    console.log(eventItem);

    const data = await updateEvent(param.id, eventItem);
    console.log(data.status);

    navigate(-1);
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
export default EventUpdate;
