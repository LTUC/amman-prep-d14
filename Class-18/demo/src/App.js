import "./App.css";
import FavRecipe from "./components/FavRecipe";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favRecipe" element={<FavRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
