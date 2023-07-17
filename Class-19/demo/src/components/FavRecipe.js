import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
function FavRecipe() {
  const [favRecipe, setFavRecipe] = useState([]);
  async function handleFavRecipe() {
    const url = `${process.env.REACT_APP_SERVER_URL}/favRecipes`;
    let response = await fetch(url);
    let recivedData = await response.json();
    setFavRecipe(recivedData);
  }
  async function handleDelete(id){
    const url = `${process.env.REACT_APP_SERVER_URL}/deleteFavRecipe/${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
    });
    if(response.status === 204){
      alert('deleted successfuly')
    }
    handleFavRecipe();
  }
  useEffect(() => {
    handleFavRecipe();
  }, []);
  console.log(favRecipe);
  return (
    <div>
      {favRecipe.map((recipe, id) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={recipe.image} />
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>{recipe.readyInMinutes}</Card.Text>
            <Button variant="primary" onClick={()=> handleDelete(recipe.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FavRecipe;
