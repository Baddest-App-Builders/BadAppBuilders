import React from "react";
import "../SidebarRow.css";
//import HomeIcon from "@material-ui/icons/Home";
//import WhatshotIcon from "@material-ui/icons/Whatshot";
//import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
//import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
//import HistoryIcon from "@material-ui/icons/History";
//import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
//import WatchLaterIcon from "@material-ui/icons/WatchLater";
//import DuoIcon from "@material-ui/icons/Duo";
//import MoreIcon from "@material-ui/icons/More";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`SidebarRow ${selected && "selected"}`}>
      <Icon className="SidebarRow__icon" />
      <h2 className="SidebarRow__title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
