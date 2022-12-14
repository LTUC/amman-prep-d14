import { Row, Container } from "react-bootstrap";
import FavoriteMemesList from './FavoriteMemesList';

function FavList(props) {
    console.log("is it getting to FavList?", props);

    return (
        <>
            <h1>My Favorite List of Memes</h1>
            <main>
                {props.favoriteList && (

                    <FavoriteMemesList favoriteList={props.favoriteList} />
                )}
            </main>
        </>
    )
}

export default FavList;