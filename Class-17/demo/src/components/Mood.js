import { useState } from "react";

function Mood(){
    const[color, setColor] = useState("aquamarine");
    

    function handleClick(){
        if(color === 'pink'){
            setColor('aquamarine')
        }else {
            setColor('pink')
        }
    }
    return(
        <>
        <button style={{backgroundColor: color}} onClick={handleClick}>Change Color</button>
        {color}
        </>
    )
}

export default Mood;