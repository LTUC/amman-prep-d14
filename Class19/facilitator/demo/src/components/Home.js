import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import MemesList from './MemesList';

function Home(props) {
    const [memes, setMemes] = useState();
    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/memesPage?&page=${1}`);

            const data = await response.json();

            setMemes(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    const updateCaptions = (data, id) => {
        let updatedMemes = memes.map(meme => {
            if (meme.id == id) {
                meme.caption = data.userCaption;
                return meme;
            }
            else return meme
        })
        setMemes(updatedMemes);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Home Page</h1>
            <main>
                {memes && (
                    <Container fluid className="main-container">
                        <Row className="flex-row">
                            <MemesList memes={memes} updateCaption={updateCaptions} updateFavList={props.updateFavList}/>
                        </Row>
                    </Container>
                )}
            </main>
        </>
    )
}

export default Home;

