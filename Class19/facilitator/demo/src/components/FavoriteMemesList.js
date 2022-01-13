import { Button, Card, CardGroup } from "react-bootstrap";

function FavoriteMemesList(props) {
    const deleteMeme = async (id) => {
        console.log(id)
        try {

            const res = await fetch(`${process.env.REACT_APP_SERVER}/deleteFavMeme/${id}`, {
                method: "DELETE",
            });
            console.log("Delete is wrorking", res.status);
            // const data = await res.json();  
            if (res.status == 204) {
                // a Bootstrep alert can be used here
                alert("delete successeded!")
            }

        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <> <CardGroup style={{ display: "flex" }}>
            {
                props.favoriteList.map(meme => {
                    return (
                        <>
                            <Card key={meme.memename}  >
                                <Card.Img

                                    variant="top"
                                    src={meme.memeimage}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {meme.memename}
                                    </Card.Title>
                                    <Card.Text>
                                        {meme.toptext ? meme.toptext : "No text"}
                                    </Card.Text>
                                    <Card.Text>
                                        {meme.comment ? meme.comment : "No Caption Added"}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => deleteMeme(meme.id)}>
                                        Delete
                                    </Button>
                                    <Button variant="primary" >
                                        Update
                                    </Button>
                                </Card.Body>
                            </Card>

                        </>
                    )

                })
            }
        </CardGroup>
        </>
    )
}

export default FavoriteMemesList;