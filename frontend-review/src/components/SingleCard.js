import React from "react";
import { Button, Card } from "react-bootstrap";
function SingleCard({ university }) {
    console.log(university);
  async function handleSendData() {
    let url = `${process.env.REACT_APP_SERVER_URL}/fav`;
    let data = {
      n: university.name,
      c: university.country,
      w: university.web_pages[0],
      cm: "uni comment",
    };
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // let recivedData = await response.json();
    console.log(response.status);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{university.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {university.country}
        </Card.Subtitle>
        <Card.Text>{university.domains}</Card.Text>
        <Card.Link href={`${university.web_pages[0]}`}>
          {university.name}
        </Card.Link>
        <Button onClick={() => handleSendData(university)}>Add to Fav</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
