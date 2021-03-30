import React from 'react';

function VideoItem(props) {
  return (
    <div className="w-90 max-w-96 flex-column border rounded-lg m-3 shadow-lg">
      <img
        className="w-full max-h-36 object-cover rounded-t-md"
        src={props.video.thumbnail}
        alt={props.video.title}
      />
      <div className="p-4">
        <h2 className="mb-2">{props.video.title}</h2>
        <p className="text-gray-500">{props.video.description}</p>
      </div>
    </div>
  );
}

export default VideoItem;
