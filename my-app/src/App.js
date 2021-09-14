import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import createYouTube from 'react-youtube-component';
import React from "react";

function App() {
  let [dogPic, setDogPic] = useState("");

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((resFromApi) => {
      setDogPic(resFromApi.data.message);
    });
  }, []);

  return (
    <div className="App">
      <h2>Apis</h2>
      <img src={dogPic} />
    </div>
  );
}

export default App;
