import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "../style/video.css";

class Header extends React.Component {
  state = {
    term: "",
  };
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
    console.log(this);
  };
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <MenuIcon />
          <img
            className="header__logo"
            src="https://bestanimations.com/media/chemistry/2002718273chemistry-atom-proton-electron-animation-17.gif"
            alt=""
          />
        </div>

        <div className="header__input">
          <form onSubmit={this.handleSubmit} className="ui form">
            <input
              placeholder="search videos"
              type="text"
              onChange={this.handleChange}
              name="video-search"
              type="text"
              value={this.state.term}
            />
          </form>
          <SearchIcon />
        </div>

        <div className="header__right">
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Avatar
            alt="BadAppBuilders"
            src="https://th.bing.com/th/id/R.f50fb6e2c3c4db633d0fd5b2c835b8b8?rik=O73sdR5pmM%2bGfQ&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f1680x1050%2f2011%2fAnimals_Beasts_Three_elephants_029124_.jpg&ehk=ee%2fzFQTUGPqmjmu8oAx7WsKcJdHNzTNUfPQGZpxaSA8%3d&risl=&pid=ImgRaw&r=0"
          />
        </div>
      </div>
    );
  }
}

export default Header;
