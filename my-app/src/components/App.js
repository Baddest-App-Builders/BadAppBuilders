import React from "react";
import Searchbar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import Header from "./Header";
import Background from "./Background";
import "../style/app.css";

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
        {/* <Background /> */}

        <Searchbar handleFormSubmit={this.handleSubmit} />

        <div className="ui grid">

          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
            <Header />
          </div>

          <div className="five wide column">
            <VideoList
              handleVideoSelect={this.handleVideoSelect}
              videos={this.state.videos}
            />

            <div className="ui row">



              <div id="video" className={this.state.show && "showVideo"}>
                <RecommendedVideos />

              </div>

              <div className="app__page"></div>
            </div>

          </div>

        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;