import React from 'react';
import useVideoApi from '../hooks/useVideoApi';
import VideoItem from './VideoItem';

const VideoList = () => {
  const url =
    'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json';

  const [isLoading, videoApi] = useVideoApi(url);

  let content = <p>Loading pokemon list...</p>;

  if (!isLoading && videoApi && videoApi.length > 0) {
    content = (
      <div className="flex flex-wrap flex-row justify-center p-20 min-h-screen ">
        {videoApi.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    );
  } else if (!isLoading && (!videoApi || videoApi.length === 0)) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default VideoList;
