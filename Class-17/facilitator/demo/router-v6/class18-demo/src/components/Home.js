import LoginButton from "./Loggin";
import Greetings from "./Greetings";
import { useState } from "react";

function Home() {
  const [isLoggedIn, setLoggin] = useState(false);
  
  const handleLoggin = () => {
    setLoggin(!isLoggedIn);
  }

  return (
    <>
      <main>
        <h2>Welcome to the home page!</h2>
        <LoginButton handleLoggin={handleLoggin} isLoggedIn={isLoggedIn} />
        <Greetings isLoggedIn={isLoggedIn} />
      </main>
    </>
  );
}
export default Home;