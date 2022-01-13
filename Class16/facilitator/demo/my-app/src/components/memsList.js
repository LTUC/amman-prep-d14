
function Memes(props){
return (
    <>
    {props.memsData.map(meme =>{
        return (
            <div key={meme.name}>
                <img src={meme.image} alt={meme.name}/>
                <h3>{meme.name}</h3>
                <p>{meme.bottomText}</p>
            </div>
        )
    })}
    </>
)

}

export default Memes;
