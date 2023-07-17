import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function ModalCard({
  handleShow,
  handleClose,
  show,
  modalData,
  commentHandler,
}) {
  const [comment, setComment] = useState("");
  const commentRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const userComment = commentRef.current.value;
    console.log("modal data", modalData);
    const newRecipe = { ...modalData, userComment };
    console.log("newRecipe", newRecipe);
    setComment(userComment);
    commentHandler(newRecipe, newRecipe.id);
    console.log(comment);
  }
  async function handleAddFav(e){
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER_URL}/addFavRecipe`;
    let data = {
      title: modalData.title,
      readyInMinutes: modalData.readyInMinutes,
      instructions: modalData.instructions,
      image: modalData.image,
      comment: modalData.comment
    }
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    let recivedData = await response.json();
    console.log('recivedData', recivedData);
    if(response.status === 201){
      alert('added successfuly')
    }
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{ width: "100%" }}
            src={modalData.image}
            alt={modalData.title}
          />
          <p>{modalData.instructions}</p>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                ref={commentRef}
                type="text"
                placeholder="Add new Comment"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="primary" onClick={(e) => handleAddFav(e)}>
              Add to Fav
            </Button>
          </Form>
          {modalData.comment ? modalData.comment : "No Comment Added"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCard;
