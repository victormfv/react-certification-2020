import React, {
  createContext,
  useCallback,
  useEffect,
  useContext,
  useState,
} from 'react';

const VideosContext = createContext({
  videos: [],
  loading: true,
  playing: false,
  handleSubmit: () => {},
  handleSearchChange: () => {},
  handleSelectVideo: () => {},
  term: '',
});

function useVideos() {
  const context = useContext(VideosContext);
  if (!context) {
    throw new Error(`Can't use "useVideos" without an VideosProvider!`);
  }
  return context;
}

const parseList = (data) => {
  const list = data.items.map((video, index) => ({
    title: video.snippet.title,
    description: video.snippet.description,
    thumbnail: video.snippet.thumbnails.medium.url,
    id: index + 1,
    videoId: video.id.videoId,
  }));
  return list;
};

function VideosProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [videos, setVideos] = useState({});
  const [term, setTerm] = useState('gatos');
  const [url, setUrl] = useState(
    'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${term}&&maxResults=12&key=AIzaSyDG_6KPHEQEyBIzSAycdY4nGJv5KgJp-P0`
    );
  };

  const handleSearchChange = (e) => {
    setTerm(e.target.value);
    console.log(e);

  };

  const SelectVideo = (e) => {
    console.log(e);
    setPlaying(true);
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setVideos(parseList(data));
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setVideos({});
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <VideosContext.Provider value={{ videos, loading, playing, handleSubmit, handleSearchChange, SelectVideo }}>
      {children}
    </VideosContext.Provider>
  );
}

export { useVideos };

export default VideosProvider;
