import React from "react";
import styles from "./video_item.module.css";

// 받은 오브젝트에서 정보를 뽑아서 만들어주는 역할
const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.video}>
    <img
      className={styles.thumbnail}
      src={snippet.thumbnails.medium.url}
      alt="video thumbnail"
    />
    <div className={styles.metadata}>
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channel}>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
