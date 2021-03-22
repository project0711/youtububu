import React from "react";
import VideoItem from "../video_item/video_item";

// props로 받은 리스트를 돌면서 오브젝트들을 VideoItem컴포넌트에 porps로 전달
const VideoList = (props) => (
  <ul>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
