import React, { useState } from "react";
//import { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import youtube from "../apis/youtube";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import "../style/video.css";
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
//import  { Redirect } from "react-router-dom";
import { useQuery } from "react-query";

const Header = (props) => {
  const [inputSearch, setInputSearch] = useState("");
  //const [videos, setVideos] = useState(Object);

  //const history = useHistory();

  const youtubeCallApi = async () => {
    const response = await youtube.get("/search", {
      params: { q: inputSearch },
    });
    const data = await response.data;

    //console.log(typeof(Object.values(response.data.items)));
    //setVideos(response.data.items);
    //  console.log(videos);
    props.history.push({
      pathname: `/Search/${inputSearch}`,
      videosState: response.data.items,
    });
  };

  const { status, data, error, refetchData } = useQuery(
    "repoData",
    youtubeCallApi,
    { refetchOnWindowFocus: false, enabled: false }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inside submit handler");
    console.log("Search term = " + inputSearch);

    youtubeCallApi();
    //refetchData();
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://bestanimations.com/media/chemistry/2002718273chemistry-atom-proton-electron-animation-17.gif"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <form onSubmit={handleSubmit} className="ui form">
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            placeholder="search"
            type="text"
          />
        </form>
        {/* <Link to={`/Search/${inputSearch}`}> */}
        <SearchIcon onClick={handleSubmit} className="header__inputButton" />
        {/* </Link> */}
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          className="header__icon"
          alt="BadAppBuilders"
          src="https://th.bing.com/th/id/R.f50fb6e2c3c4db633d0fd5b2c835b8b8?rik=O73sdR5pmM%2bGfQ&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f1680x1050%2f2011%2fAnimals_Beasts_Three_elephants_029124_.jpg&ehk=ee%2fzFQTUGPqmjmu8oAx7WsKcJdHNzTNUfPQGZpxaSA8%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
    </div>
  );
};

export default withRouter(Header);
