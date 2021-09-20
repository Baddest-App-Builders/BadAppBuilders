import React from "react";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import VideoRow from "./videoRow";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";

const SearchPage = (prevProps) => {



    //return <div className='ui relaxed divided list'>{renderedVideos}</div>;

    return (

        <div className="SearchPage">
            <div className='SearchPage__filter'>
                <TuneOutlinedIcon />
                <h2>Filter</h2>

            </div>
            <hr />

            <ChannelRow
                image='https://www.24newshd.tv/uploads/facebook_post_images/2020-10-26/facebook_post_image_1603699901.jpg'
                channel='Tylor Swift'
                verified
                subs='43.4M'
                noOfVideos={4000}
                description='Provided to YouTube by Universal Music Group Wildest Dreams Taylor Swift Wildest Dreams 
                   ℗ 2021 Taylor Swift
                Released on: 2021-09-17 ' />

            <hr />

            {(prevProps.location.videosState).map((videoItem) => (

                <VideoRow key={videoItem.id.videoId}
                    views="15M"
                    subs="5M"
                    description={videoItem.snippet.description}
                    timestamp={videoItem.snippet.publishTime}
                    channel={videoItem.snippet.channleTitle}
                    title={videoItem.snippet.title}
                    videoId={videoItem.id.videoId}
                />
            ))}




        </div>
    )
}
export default withRouter(SearchPage);