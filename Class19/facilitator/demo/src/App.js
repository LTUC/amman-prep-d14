import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import FavList from "./components/FavList";
import { useEffect, useState } from 'react';

function App() {
  const [favoriteList, setFavoriteList] = useState();
  const fetchData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/favmeme`);

      const data = await res.json();
      setFavoriteList(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const updateFavList = (newData) => {
    setFavoriteList(newData)
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home updateFavList={updateFavList} />} />
        <Route path="/favList" element={<FavList favoriteList={favoriteList} />} />
      </Routes>
    </>
  );
}

export default App;
