import React from "react";

// 받은 오브젝트에서 정보를 뽑아서 만들어주는 역할
const VideoItem = (props) => <h1>{props.video.snippet.title}</h1>;

export default VideoItem;
