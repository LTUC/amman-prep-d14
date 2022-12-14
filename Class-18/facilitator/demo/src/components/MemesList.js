import { Card, CardGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import ModalMeme from './Modal';

function MemesList(props) {
    const [showModal, setShowModal] = useState(false);
    const [meme, setMeme] = useState();
    return (
        <>
            <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
                {
                    props.memes.map(meme => {
                        return <div key={meme.id}>
                            <Card key={meme.id} >
                                <Card.Img variant="top" src={meme.image} />
                                <Card.Body>
                                    <Card.Title>{meme.name}</Card.Title>
                                    <Card.Text>
                                        {meme.topText ? meme.topText : "No text"}
                                    </Card.Text>
                                    <Card.Text>
                                        {meme.caption ? meme.caption : "No Caption Added"}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { setMeme(meme); setShowModal(true) }} >Show Modal</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
            </CardGroup>
            {showModal && <ModalMeme show={showModal} meme={meme} handleColse={() => { setShowModal(false) }} updateCaption={props.updateCaption} />}
        </>
    )
}

export default MemesList;