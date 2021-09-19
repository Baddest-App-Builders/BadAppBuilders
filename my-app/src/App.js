import "./Header.css";
import "./Sidebar.css";
import "./app.css";
// import Background from "./components/Background";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import SidebarRow from "./components/SidebarRow";
import "./Sidebar.css";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./components/youtube";
function App() {
  const ref = firebase.firestore().collection("");

  //when search search for term in database
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/Search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
