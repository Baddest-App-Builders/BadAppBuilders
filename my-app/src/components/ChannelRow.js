import React from "react";
import "./ChannelRow.css";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import { Avatar } from "@material-ui/core";
function ChannelRow({ image, channel, subs, noOfVideos, description, verified }) {
    return (
        <div className='ChannelRow'>
            <Avatar className='ChannelRow__logo' alt={channel} src={image} />
            <div className='ChannelRow__text'>
                <h4>{channel} {verified && <VerifiedIcon />} </h4>
                <p>
                    {subs} subscribers . {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default ChannelRow;