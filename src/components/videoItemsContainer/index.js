import { connect } from 'react-redux';

import { VideoItemsContainer } from './VideoItemsContainer';
import { showMoreVideos } from '../../redux/videos/actions';

const mapStateToProps = state => ({
  videos: state.video.videos.filter(video => video.snippet.title.toLowerCase().startsWith(state.video.filterVideoStr)),
  favoriteVideosIds: state.favoriteVideos.favoriteVideosIds,
  toggleFavorites: state.favoriteVideos.toggleFavorites,
  nextPageToken: state.video.nextPageToken,
});

const mapDispatchToProps = {
  showMoreVideos,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoItemsContainer);
