import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import DuoIcon from "@material-ui/icons/Duo";
import MoreIcon from "@material-ui/icons/More";
import '../style/Sidebar.css';

function Sidebar() {
    return (
      <div className="sidebar">
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={WhatshotIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
        <SidebarRow Icon={VideoLibraryIcon} title="VideoLibrary"/>
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={PersonalVideoIcon} title="PersonalVideo"/>  
        <SidebarRow Icon={WatchLaterIcon} title="WatchLater"/>
        <SidebarRow Icon={DuoIcon} title="Duo"/>
        <SidebarRow Icon={MoreIcon} title="More"/>  
      </div>
    );
}

export default Sidebar;