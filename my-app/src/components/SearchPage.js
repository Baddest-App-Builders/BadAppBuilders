import React from "react";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import VideoRow from "./videoRow";


function SearchPage() {
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

            <VideoRow
                views="15M"
                subs="5M"
                description="Cute baby animals Videos Compilation cutest moment "
                timestamp="59 seconds ago"
                channel="https://www.youtube.com/channel/UCerazDNo8vEcVTbBajMAoFQ"
                title="Cutest Puppies City"
                image="https://2.bp.blogspot.com/-WznIJmuH9B0/UXeOi9s3ykI/AAAAAAAAAoI/mekeFb7eO5Q/s1600/Merlin.jpg"
            />

            <VideoRow
                views="15M"
                subs="5M"
                description="Cute baby animals Videos Compilation cutest moment "
                timestamp="59 seconds ago"
                channel="https://www.youtube.com/channel/UCerazDNo8vEcVTbBajMAoFQ"
                title="Cutest Puppies City"
                image="https://2.bp.blogspot.com/-WznIJmuH9B0/UXeOi9s3ykI/AAAAAAAAAoI/mekeFb7eO5Q/s1600/Merlin.jpg"
            />

            <VideoRow
                views="15M"
                subs="5M"
                description="Cute baby animals Videos Compilation cutest moment "
                timestamp="59 seconds ago"
                channel="https://www.youtube.com/channel/UCerazDNo8vEcVTbBajMAoFQ"
                title="Cutest Puppies City"
                image="https://2.bp.blogspot.com/-WznIJmuH9B0/UXeOi9s3ykI/AAAAAAAAAoI/mekeFb7eO5Q/s1600/Merlin.jpg"
            />
            <VideoRow
                views="15M"
                subs="5M"
                description="Cute baby animals Videos Compilation cutest moment "
                timestamp="59 seconds ago"
                channel="https://www.youtube.com/channel/UCerazDNo8vEcVTbBajMAoFQ"
                title="Cutest Puppies City"
                image="https://2.bp.blogspot.com/-WznIJmuH9B0/UXeOi9s3ykI/AAAAAAAAAoI/mekeFb7eO5Q/s1600/Merlin.jpg"
            />

            <VideoRow
                views="15M"
                subs="5M"
                description="Cute baby animals Videos Compilation cutest moment "
                timestamp="59 seconds ago"
                channel="https://www.youtube.com/channel/UCerazDNo8vEcVTbBajMAoFQ"
                title="Cutest Puppies City"
                image="https://2.bp.blogspot.com/-WznIJmuH9B0/UXeOi9s3ykI/AAAAAAAAAoI/mekeFb7eO5Q/s1600/Merlin.jpg"
            />

            <VideoRow
                views="15M"
                subs="5M"
                description="Cute baby animals Videos Compilation cutest moment "
                timestamp="59 seconds ago"
                channel="https://www.youtube.com/channel/UCerazDNo8vEcVTbBajMAoFQ"
                title="Cutest Puppies City"
                image="https://2.bp.blogspot.com/-WznIJmuH9B0/UXeOi9s3ykI/AAAAAAAAAoI/mekeFb7eO5Q/s1600/Merlin.jpg"
            />
        </div>
    )
}
export default SearchPage;