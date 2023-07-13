import React, {useState} from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Card, Button } from "react-bootstrap";
import ModalCard from "./ModalCard";
function Cards(props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.data.image} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>{props.data.readyInMinutes}</Card.Text>
          <Button onClick={handleShow} variant="primary">show Modal</Button>
        </Card.Body>
      </Card>
      <ModalCard  modalData={props.data} handleClose={handleClose} handleShow={handleShow} show={show} />
    </div>
  );
}

export default Cards;
