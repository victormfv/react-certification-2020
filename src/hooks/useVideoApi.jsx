import { useState, useEffect, useCallback } from 'react';

const useVideoApi = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoList, setVideoList] = useState([]);

  const parseList = (data) => {
    const list = data.items.map((video, index) => ({
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.medium.url,
      id: index + 1,
    }));
    return list;
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setVideoList(parseList(data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [isLoading, videoList];
};

export default useVideoApi;
