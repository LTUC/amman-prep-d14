import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap/';
import { useRef } from 'react';

function ModalMeme(props) {

    const commentRef = useRef();
    function handleCaption(e) {
        e.preventDefault()
        const userCaption = commentRef.current.value;
        const newData = { ...props.memes, userCaption };
        props.updateCaption(newData, props.meme.id);
    }

    async function addToFavorite(meme) {
        try {

            const res = await fetch(`${process.env.REACT_APP_SERVER}/addFavMeme`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: meme.name,
                    image: meme.image,
                    tags: meme.tag,
                    topText: meme.topText,
                    comment: meme.caption
                })
            });
            const data = await res.json();
            props.updateFavList(data)

        } catch (error) {
            console.log("error", error);
        }
    }
    return (
        <>
            <Modal show={props.show} onHide={() => { props.handleColse() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.meme.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width='100%' src={props.meme.image} alt={props.meme.name} />
                    <p>{props.meme.topText ? props.meme.topText : "No Text Provided"}</p>
                    <p>{props.meme.caption}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Captions:</Form.Label>
                        <Form.Control ref={commentRef} type="textarea" placeholder={props.meme.caption ? props.meme.caption : "Add Your Caption Here..."} />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}  >
                        Add a Caption
                    </Button>
                    <Button className="addBtn" variant="primary" type="submit" onClick={() => addToFavorite(props.meme)}>
                        Add to Favorite
                    </Button>
                    <Button variant="secondary" onClick={props.handleColse}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMeme;