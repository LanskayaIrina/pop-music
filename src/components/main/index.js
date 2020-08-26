import { connect } from 'react-redux';

import { Main } from './Main';
import { getVideos, goToCurrentPage } from '../../redux/videos/actions';

const mapStateToProps = state => ({
  videos: state.video.videos.filter(video => video.snippet.title.includes(state.video.filterVideoStr)),
  favoriteVideos: state.favoriteVideos.favorite_Videos,
  pageSize: state.video.pageSize,
  totalPagesCount: state.video.totalPagesCount,
  currentPage: state.video.currentPage,
});

const mapDispatchToProps = {
  getVideos,
  goToCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
