import { Route, Routes } from "react-router";
import Home from "./components/Home";
import FavList from "./components/FavList";
import NavList from "./components/NavList";
function App() {
  let url = process.env.REACT_APP_SERVER_URL;
  console.log(url);
  return (
    <div className="App">
    <NavList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<FavList />} />
      </Routes>
      App
    </div>
  );
}

export default App;
