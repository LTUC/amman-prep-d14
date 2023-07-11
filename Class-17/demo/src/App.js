import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
function App() {
  function handleMessage(data){
    console.log(data);
  }
  return (
    <div className="App">
    <NavBar />
      <Routes>
        <Route path="/" element={<Home handleMessage={handleMessage} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
