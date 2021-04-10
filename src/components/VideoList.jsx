import React from 'react';
import { useVideos } from '../state/VideosProvider';
import VideoItem from './VideoItem';

const VideoList = () => {
  const { videos, loading } = useVideos();

  let content = <p>Loading video list...</p>;

  if (loading) content = <p>Loading ...</p>;
  else if (!loading && videos.length)
    content = (
      <div className="flex flex-wrap flex-row justify-center p-20 min-h-screen ">
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    );
  else if (!loading && !videos.length) content = <p>Could not fetch any data.</p>;
  return content;
};

export default VideoList;
