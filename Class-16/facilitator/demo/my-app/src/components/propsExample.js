
function PropsExample(props){
    // console.log("Display props:",props) // it is an object
    // const {name, color} = props 
return (
    <>
    <p style={{color:props.color}}>Hello my name is {props.name}, I like {props.color} color</p>
    </>
)
}

export default PropsExample;