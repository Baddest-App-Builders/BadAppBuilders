import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../style/app.css";

const VideoCard = (image, title, channel, views, channelImage, timestamp) => {
  return (
    <div className="videoCard">
      <img src={image} alt="" />
      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
        <div className="video_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} * {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;