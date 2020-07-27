import { connect } from 'react-redux';

import { VideoCard } from './VideoCard';
import { getVideoById } from '../../redux/videos/actions';

const mapDispatchToProps = {
  getVideoById,
};

export default connect(null, mapDispatchToProps)(VideoCard);
