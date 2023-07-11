import Mood from "./Mood";
import LoggedIn from "./LoggedIn";
import Welcome from "./Welcome";
import { useState } from "react";
function Home(props) {
  const [message, setMessage] = useState("Stranger");
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     console.log(e.target.username.value);
  //   }
  function test() {
    props.handleMessage(message);
  }
  function handleWlcome(data) {
    console.log(data);
    if (data === true) {
      setMessage("Back");
    } else {
      setMessage("Stranger");
    }
    test();
  }
  return (
    <div>
      <h1 style={{ color: "red" }}>Home</h1>
      {/*<form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
        </form>*/}
      <Mood />
      <LoggedIn login={handleWlcome} />
      <Welcome message={message} />
    </div>
  );
}
export default Home;
