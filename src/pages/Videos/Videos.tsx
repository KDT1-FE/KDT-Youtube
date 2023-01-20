import { useContext } from 'react';
import VideoCard from 'src/components/VideoCard/VideoCard';
import { ShowContext } from 'src/contexts/store';
import './Videos.scss';
const Videos = () => {
  const [shownav] = useContext(ShowContext);

  console.log('1111', shownav);

  return (
    <ul className={shownav === false ? 'mainGallery' : 'narrowGallery'}>
      <VideoCard />
    </ul>
  );
};

export default Videos;
