import React from 'react';
import { useVideos } from '../state/VideosProvider';
import VideoItem from './VideoItem';

const VideoList = () => {
  const { videos, loading, SelectVideo } = useVideos();
  const handleSelectVideo = (video) => () => SelectVideo(video);


  let content = <p>Loading video list...</p>;

  if (loading) content = <p>Loading ...</p>;
  else if (!loading && videos.length)
    content = (
      <div>
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} onSelectVideo={handleSelectVideo(video)} />
        ))}
      </div>
    );
  else if (!loading && !videos.length) content = <p>Could not fetch any data.</p>;
  return content;
};

export default VideoList;
