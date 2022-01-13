// another way of conditional rendering
function Greetings(props){
    const isLoggedIn = props.isLoggedIn;
   return(
       <>
       {isLoggedIn ? <p>You Have loggedIn successfully!</p> : <p>Please Login</p>}
       </>
   )
}

export default Greetings;