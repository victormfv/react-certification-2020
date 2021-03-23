import React, { useRef,useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import VideoCard from '../../components/VideoCard';
import styled from 'styled-components';
const dataJson ="https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json";

const Videos = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px;
`;

function HomePage() {
    const [videos, setVideos] = useState(null);
    const sectionRef = useRef(null);
    const { authenticated } = useAuth();

    useEffect(() => {
    fetch(dataJson)
    .then(response => response.json())
    .then((jsonData) => {
      setVideos(jsonData.items);
    })
    .catch((error) => {
      console.error(error)
    });
  }, []);

  return (
    <section className="homepage" ref={sectionRef}>
      <h2>Welcome to the Challenge!</h2>
      {authenticated ? (
        <Videos>
         {videos? (videos.map((video)=>(
         <VideoCard key={video.etag} video={video.snippet} />))):""}
        </Videos>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
