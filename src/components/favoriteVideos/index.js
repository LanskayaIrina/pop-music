import { connect } from 'react-redux';

import { FavoriteVideos } from './FavoriteVideos';

const mapStateToProps = state => ({
  favoriteVideosIds: state.favoriteVideos.favoriteVideosIds,
  favoriteVideos: state.favoriteVideos.favoriteVideos.filter(video =>
    video.title.toLowerCase().startsWith(state.video.filterVideoStr),
  ),
});

export default connect(mapStateToProps, null)(FavoriteVideos);
