import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import DuoIcon from "@material-ui/icons/Duo";
import MoreIcon from "@material-ui/icons/More";
import { Link } from 'react-router-dom'
import "../Sidebar.css";
import "../SidebarRow.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/"><SidebarRow selected Icon={HomeIcon} title="Home" /></Link>
      <Link to="/trending"><SidebarRow Icon={WhatshotIcon} title="Trending" /></Link>
      <Link to="/puppies"><SidebarRow Icon={SubscriptionsIcon} title="Puppies" /></Link>
      <hr />
      <Link to="/react"><SidebarRow Icon={VideoLibraryIcon} title="VideoLibrary" /></Link>
      <Link to="/history"><SidebarRow Icon={HistoryIcon} title="History" /></Link>
      <SidebarRow Icon={PersonalVideoIcon} title="PersonalVideo" />
      <SidebarRow Icon={WatchLaterIcon} title="WatchLater" />
      <SidebarRow Icon={DuoIcon} title="Duo" />
      <SidebarRow Icon={MoreIcon} title="More" />
      <hr />
    </div>
  );
}

export default Sidebar;

//
//
