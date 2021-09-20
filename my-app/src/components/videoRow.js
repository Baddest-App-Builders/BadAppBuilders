import React from 'react';
import "./videoRow.css";

function VideoRow({ views, subs, description, timestamp, channel, title, videoId }) {
    
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    console.log(videoId);
    return (
        <div className="videoRow">

           <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player' />
            </div>

            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} .{" "}
                    <span className="videoRow__subs">
                        <span className="videoRow__subsNumber"> {subs} </span>subscribers
                    </span>{" "}
                    {views} views . {timestamp}
                </p>
                <p className='videoRow__description'>
                    {description}</p>

            </div>
        </div>
    );
}

export default VideoRow;

