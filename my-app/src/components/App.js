import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

import VideoDetail from "../components/VideoDetail";
import Background from "./Background";
import "../style/app.css";
import logo from "../images/solar_system_2d.gif";
import RecommendedVideos from "./RecommendedVideos";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    show: true,
  };

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    console.log(Date());

    this.setState({
      videos: response.data.items,
      show: false,
    });
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container-fluid" style={{ marginTop: "1em" }}>
        <Background />

        <div id="video" className={this.state.show && "showVideo"}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fwfT6k5kD4s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        {/* <img className="solarlogo" src={logo} alt="logo" /> */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
        <RecommendedVideos />
      </div>
    );
  }
}

export default App;
