import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import createYouTube from 'react-youtube-component';
import React from 'react';
// import YouTube from 'react-youtube';
import { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react';
import youtube from './api/youtube'



function App() {
  let [dogPic, setDogPic] = useState("");

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((resFromApi) => {
      setDogPic(resFromApi.data.message);
    });
  }, []);
  console.log(process.env.REACT_APP_GOOGLEID)
  return (
    <div className="App">
      <h2>Apis</h2>
      <img src={dogPic} />
    </div>
  );
}

export default App;
