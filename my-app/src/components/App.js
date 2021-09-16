import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import Header from "./Header";
import Background from "./Background";
import "../style/app.css";
import logo from "../images/solar_system_2d.gif";


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

     
handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
        params: {
            q: termFromSearchBar
        }
    
    })

    console.log(Date());

    this.setState({
        videos: response.data.items
    })

}

handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
};

render() {
    return (
        
      <div className="ui container-fluid" style={{ marginTop: "1em" }}>
        <Background />
        {/* <SearchBar handleFormSubmit={this.handleSubmit} /> */}
        <img className="solarlogo" src={logo} alt="logo" />
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
                    <div className="app__page">
                        <Sidebar />
                        <RecommendedVideos />
                    </div>

              <Header />
              </div>
              </div>  
          </div>
       
          
    );

}
}

export default App;
