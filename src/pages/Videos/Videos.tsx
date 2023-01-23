import { useContext } from 'react';
import VideoCard from 'src/components/VideoCard/VideoCard';
import { ShowContext } from 'src/contexts/store';
import './Videos.scss';
const Videos = () => {
  const [shownav] = useContext(ShowContext);

  return (
    <div className="GalleryContainer" nav-check={shownav ? 'show' : 'none'}>
      <ul className="mainGallery">
        <VideoCard />
      </ul>
    </div>
  );
};

export default Videos;
