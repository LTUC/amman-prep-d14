function Memes(props){
    return(
        <div>
        <p>{props.name}</p>
        <img src={props.image} alt={props.name} />
        <h5>{props.tags}</h5>
        </div>
    )
}
export default Memes;