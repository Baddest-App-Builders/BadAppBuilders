import React, { useEffect, useState } from "react";
import "../RecommendedVideos.css";
import VideoCard from "./VideoCard";
import youtube from "../apis/youtube";


function RecommendedVideos(props) {

  const [videos, setVideos] = useState([])
  console.log(props.query, '=-=-=-=-')
  useEffect(async () => {

    const response = await youtube.get("/search", {
      params: { q: props.query },
    });
    const data = await response.data;

    console.log(data, '???')
    setVideos(data.items)
  }, [props.query])


  const ShowTrendingVideos = () => {
    return videos.map(eachVideo => {
      return (
        <VideoCard
          videoId={eachVideo.id.videoId}
          title={eachVideo.snippet.title}
          views={`${Math.round(Math.random() * 450)}k Views`}
          timestamp={`${Math.round(Math.random() * 3)} weeks ago`}
          // channelImage="https://yt3.ggpht.com/ytc/AKedOLRFlH5XnTHG1Qcz8nNycMIUSou2kuE-EQzrI8LYzY4=s68-c-k-c0x00ffffff-no-rj"
          channel={eachVideo.snippet.channelTitle}
          image={eachVideo.snippet.thumbnails.high.url}
        />
      )
    })
  }


  return (
    <div className="recommendedVideos">
      <h1>Recommended</h1>
      <div className="recommendedVideos_videos">
        <ShowTrendingVideos />
        {/* <VideoCard
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

        <VideoCard
          title="Introducing iPhone 13 Pro"
          views="7.7M views"
          timestamp="1 day ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRIec7gUC89wc0OGstCraoIatVagBJHOpLW-n5QrQ=s68-c-k-c0x00ffffff-no-rj"
          channel="Apple"
          image="https://i.ytimg.com/an_webp/XKfgdkcIUxw/mqdefault_6s.webp?du=3000&sqp=CMSroYoG&rs=AOn4CLDHC3dAa0X4FCDadFjjzzJVVvJSwA"
        />

        <VideoCard
          title="Inspiration4 | Launch"
          views="3.7 million views"
          timestamp="4 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLT8pkoFKZVd_jjWQES_MgOzl50RdEb7A_ufpkFgaSs=s68-c-k-c0x00ffffff-no-rj"
          channel="SpaceX"
          image="https://i.ytimg.com/an_webp/3pv01sSq44w/mqdefault_6s.webp?du=3000&sqp=CKDkoYoG&rs=AOn4CLBfm6MmqUK-K5hBdsbY311PPwRODg"
        />

        <VideoCard
          title="How we need to remake the internet | Jaron Lanier"
          views="345K views"
          timestamp="3 years ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRTHraf4M_OaDZFwfqK8F9TTjxe3DHwFZMkZGqmAw=s68-c-k-c0x00ffffff-no-rj"
          channel="Ted"
          image="https://i.ytimg.com/an_webp/Np5ri-KktNs/mqdefault_6s.webp?du=3000&sqp=CIfnoYoG&rs=AOn4CLCkT1gCCiGBy8yO98HapXZZe-dLAA"
        />

        <VideoCard
          title="React Js Crash Course 2021"
          views="1.2 Million views"
          timestamp="7 Months ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj"
          channel="Traversy Media"
          image="https://i.ytimg.com/vi/w7ejDZ8SWv8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzn-mJ6EYgNMWXlfwSh2Ba-yglMg"
        />
        <VideoCard
          title="Preparing the Space Station for a Future Power Boost on This Week @NASA – September 17, 2021"
          views="50,255 views"
          timestamp="2 days ago"
          channelImage="https://i.ytimg.com/an_webp/8cbPBle1ME0/mqdefault_6s.webp?du=3000&sqp=CJukoooG&rs=AOn4CLDzDL6VS3zwQB2MPXJlKOueGdtM2g"
          channel="Nasa"
          image="https://i.ytimg.com/an_webp/8cbPBle1ME0/mqdefault_6s.webp?du=3000&sqp=CJukoooG&rs=AOn4CLDzDL6VS3zwQB2MPXJlKOueGdtM2g"
        /> */}
      </div>
    </div>
  );
}

export default RecommendedVideos;
