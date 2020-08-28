import { connect } from 'react-redux';

import { VideoCard } from './VideoCard';
import { showVideoInPayer } from '../../redux/videos/actions';
import { addIdVideoToFavorite, addFavoriteVideo } from '../../redux/favorites/actions';

const mapDispatchToProps = {
  showVideoInPayer,
  addIdVideoToFavorite,
  addFavoriteVideo,
};

export default connect(null, mapDispatchToProps)(VideoCard);
