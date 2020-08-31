import { connect } from 'react-redux';

import { VideoCard } from './VideoCard';
import { showVideoInPayer } from '../../redux/videos/actions';
import { addIdVideoToFavorite, addFavoriteVideo } from '../../redux/favorites/actions';

const mapStateToProps = state => ({
  theme: state.themeApp.theme,
});

const mapDispatchToProps = {
  showVideoInPayer,
  addIdVideoToFavorite,
  addFavoriteVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoCard);
