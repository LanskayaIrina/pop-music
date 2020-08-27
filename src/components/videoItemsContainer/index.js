import { connect } from 'react-redux';

import { VideoItemsContainer } from './VideoItemsContainer';
import { showMoreVideos } from '../../redux/videos/actions';

const mapStateToProps = state => ({
  videos: state.video.videos.filter(video => video.snippet.title.includes(state.video.filterVideoStr)),
  favoriteVideos: state.favoriteVideos.favorite_Videos,
  nextPageToken: state.video.nextPageToken,
});

const mapDispatchToProps = {
  showMoreVideos,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoItemsContainer);
