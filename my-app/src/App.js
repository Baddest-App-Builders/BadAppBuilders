import "./Header.css";
import "./Sidebar.css";
import "./app.css";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
//import SidebarRow from "./components/SidebarRow";
import "./Sidebar.css";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import youtube from './apis/youtube';
import { useQuery } from "react-query";
//import { useLayoutEffect,useMemo } from "react";
import React, { useEffect, useState } from "react";
import Background from "./components/Background";


//var response = [];



/*
 const [response,setResponse] = useState([]);
 
 useEffect(() => {
   retrieveData(); 
 }, []);
 
 //const  youtubeCallApi =   async () => {
   
   //console.log("Hello from youtubecallApi");
 const retrieveData = () => { 
     youtube.get('/videos', {params: { part: "snippet", chart: "mostPopular" }})
   .then(res => {
     console.log(res.data.items);
     let responseTemp = [];
     
     for (const videoItem of res.data.items) {
 
     
            const title = videoItem.snippet.title;
            const timeStamp = videoItem.snippet.publishedAt;
            const channelTitle = videoItem.snippet.channelTitle;
            const thumbNailUrl = videoItem.snippet.thumbnails.default.url;
            responseTemp.push(title,timeStamp,channelTitle,thumbNailUrl);
            console.log(responseTemp);
            setResponse(responseTemp);
            
     }// for ends
     
     
    
     
   })
 }
 
 //}
 
   //const data  = await responseTemp.data;
   //setResponse(responseTemp.data.items);
   
   
//const { status, data, error, refetchData } = useQuery("repoData", youtubeCallApi,{ refetchOnWindowFocus: false, enabled: false });    
 
*/




function App() {
  //when search search for term in database
  return (
    <div className="app">
      <Background />
      <Router>
        <Header />
        <Searchbar />
        <Switch>
          <Route path="/Search/:searchTerm" component={SearchPage}>
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />

              <RecommendedVideos />)


            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );

}


export default App;
