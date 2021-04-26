import React from 'react';
import VideoList from '../components/VideoList';
import VideoPlayer from '../components/VideoPlayer';
import { useVideos } from '../state/VideosProvider';
// <div className="flex flex-wrap flex-row justify-center p-20 min-h-screen ">

function Home() {
  
  const { playing} =useVideos()

  return (
    <div className="flex flex-row justify-center min-w-full ">
        <div className="w-4/5 flex flex-row justify-center border p-10" >
           <div className="flex border flex-col h-youtube-l w-youtube-l">
             <VideoPlayer/>
             </div>
        </div>
        <div className="flex flex-col border p-10">
          <VideoList />
        </div>
    </div>
  );

}

export default Home;
