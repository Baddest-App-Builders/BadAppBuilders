import "./Header.css";
import "./Sidebar.css";
import "./app.css";
// import Background from "./components/Background";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import SidebarRow from "./components/SidebarRow";
import "./Sidebar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Search/:searchTerm">
            <h1>Search page</h1>
          </Route>
          <Route path="/">
            <Header />
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
