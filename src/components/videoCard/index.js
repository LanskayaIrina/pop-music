import { connect } from 'react-redux';

import { VideoCard } from './VideoCard';
import { getVideoById } from '../../redux/videos/actions';
import { toggleVideoToFavorite } from '../../redux/favorites/action';

const mapDispatchToProps = {
  getVideoById,
  toggleVideoToFavorite,
};

export default connect(null, mapDispatchToProps)(VideoCard);
