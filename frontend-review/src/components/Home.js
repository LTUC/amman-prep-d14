import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Cards from "./Cards";
function Home() {
  const country = useRef("");
  const [universities, setUniversities] = useState([]);
  async function getAllUniversities(e) {
    e.preventDefault();
    let refCountry = country.current.value;
    let url = `${process.env.REACT_APP_SERVER_URL}/unis?cont=${refCountry}`;
    let response = await fetch(url);
    let recivedData = await response.json();
    setUniversities(recivedData);
  }
  useEffect(() => {
    async function getAll() {
      let url = `${process.env.REACT_APP_SERVER_URL}/unis?cont=jordan`;
      let response = await fetch(url);
      let recivedData = await response.json();
      setUniversities(recivedData);
    }
    getAll();
  }, []);

  return (
    <div>
      <Form onSubmit={(e) => getAllUniversities(e)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Search</Form.Label>
          <Form.Control
            ref={country}
            type="text"
            placeholder="Search About specific Country"
          />
          <Button type="submit">search</Button>
        </Form.Group>
      </Form>
      <Cards universities={universities} />
    </div>
  );
}

export default Home;
