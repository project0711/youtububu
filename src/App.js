import React, { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/video_list/video_list";
//
//

function App() {
  // 비디오가 들어오는 리스트
  const [videos, setVideos] = useState([]);
  //
  // 유저 웹앱 접속->마운트 되면 유튜브 api가장인기영상들 요청 ->화면에 보여줌
  useEffect(() => {
    // 요청 로직 작성
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDJjwsIKQ4tMa9IT_AVjWHyxslzQOFwBj0",
      requestOptions
    )
      .then((response) => response.json())
      // videos에 items라는 리스트를 통째로 넣습니다
      // 그리고 videos를 가지고 컴포넌트에 조리해줍니다
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <VideoList videos={videos} />
    </>
  );
}

export default App;
