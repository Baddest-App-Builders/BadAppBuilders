import React from "react";
import "../style/app.css";
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <VideoCard
        title="Tesla AI Day Highlights | Lex Fridman"
        views="450k Views"
        timestamp="3 weeks ago"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLRFlH5XnTHG1Qcz8nNycMIUSou2kuE-EQzrI8LYzY4=s68-c-k-c0x00ffffff-no-rj"
        channel="Lex Fridman"
        image="https://i.ytimg.com/vi/ABbDB6xri8o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt6xe65_De5xHUkv8lu80ZCbfhZg"
      />
      <VideoCard
        title="How To Think Like A Programmer"
        views="1.1M views"
        timestamp="2 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSlrBJOA97k9yCSMwnknkCmaxBZJJV8C4KHjPezRw=s68-c-k-c0x00ffffff-no-rj"
        channel="Coding Tech"
        image="https://i.ytimg.com/vi/azcrPFhaY9k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5WVjmVhgYJJhORzWDU_iCWfJ47w"
      />
      {/* <VideoCard
        title="Introducing iPhone 13 Pro"
        views="7.7M views"
        timestamp="1 day ago"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLRIec7gUC89wc0OGstCraoIatVagBJHOpLW-n5QrQ=s68-c-k-c0x00ffffff-no-rj"
        channel="Apple"
        image="https://i.ytimg.com/an_webp/XKfgdkcIUxw/mqdefault_6s.webp?du=3000&sqp=CMyBiooG&rs=AOn4CLBNcToNArjM2Ru0vAD2YJLG0q4brw"
      /> */}

      <VideoCard
        title="Documentary ~ Artificial Intelligence"
        views="281K views"
        timestamp="1 year ago"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLQqYpzI6n00m338TvICWtXEYOA_-keLAu1an9jU9g=s68-c-k-c0x00ffffff-no-rj"
        channel="metaRising"
        image="https://i.ytimg.com/an_webp/pQVYwz6u-zA/mqdefault_6s.webp?du=3000&sqp=CPCOiooG&rs=AOn4CLAgxCsTrLWauLLXwu2d6yfLFqgfWA"
      />
      <VideoCard
        title="How we need to remake the internet | Jaron Lanier"
        views="345K views"
        timestamp="3 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLRTHraf4M_OaDZFwfqK8F9TTjxe3DHwFZMkZGqmAw=s68-c-k-c0x00ffffff-no-rj"
        channel="Ted"
        image="https://i.ytimg.com/an_webp/KNOlqzMd2Zw/mqdefault_6s.webp?du=3000&sqp=CKCmiooG&rs=AOn4CLDyic6t-9Wn7CF5L3MXTP7YFfWHGg"
      />
      <VideoCard
        title="React Js Crash Course 2021"
        views="1.2 Million views"
        timestamp="7 Months ago"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj"
        channel="Traversy Media"
        image="https://i.ytimg.com/vi/w7ejDZ8SWv8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzn-mJ6EYgNMWXlfwSh2Ba-yglMg"
      />
    </div>
  );
};

export default RecommendedVideos;
