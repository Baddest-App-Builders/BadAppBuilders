import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../components/videoCard.css";






function VideoCard({ image, title, channel, views, channelImage, timestamp, videoId }) {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (

    <div className="videoCard">
      {/* <img className="videoCard_thumbnail" src={image} alt="" /> */}
      <div className='ui embed'>
        <iframe src={videoSrc} allowFullScreen title='Video player' />
      </div>
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
}

export default VideoCard;
