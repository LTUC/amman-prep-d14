import { useState } from "react";

function LoggedIn(props) {
const [logIn, setLogin] = useState(false);
// const [username, setUserName] = useState('');
// const [password, setPassWord] = useState('');
function handleLoggedIn(){
    //inverter
    setLogin(!logIn);
    props.login(logIn)
    console.log(logIn);
}

//loggedIN => Log out => true
//not loggedIn => Log in => false
//Ternary if
//login ? "" : ""
//conditional rendering
//login && <>
  return (
    <div>
      {/*<button onClick={handleLoggedIn}>{logIn ? 'Log in' :'Log out'}</button>*/}
      {!logIn && <button onClick={handleLoggedIn}>'Log out</button>}
      {logIn && <button onClick={handleLoggedIn}>'Log In</button>}
    </div>
  )
}

export default LoggedIn


