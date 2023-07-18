import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
function FavList() {
  const [favList, setFavList] = useState([]);
  async function getAllFav() {
    let url = `${process.env.REACT_APP_SERVER_URL}/fav`;
    let response = await fetch(url);
    const recivedData =await response.json();
    setFavList(recivedData);
  }
  async function handleDelete(name){
    let url = `${process.env.REACT_APP_SERVER_URL}/fav/${name}`;
    let response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.status);
      getAllFav();
  }
  useEffect(() => {
    getAllFav();
  }, []);
  console.log(favList);
  return (
    <div>{favList&&favList.map((fav, i) => (
        <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{fav.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {fav.country}
        </Card.Subtitle>
        <Card.Text>{fav.comment}</Card.Text>
        <Card.Link href={`${fav.web_pages}`}>
          {fav.name}
        </Card.Link>
        <Button onClick={() => handleDelete(fav.name)}>Delete</Button>
      </Card.Body>
    </Card>
    ))}</div>
  )
}

export default FavList;
