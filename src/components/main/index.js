import { connect } from 'react-redux';

import { Main } from './Main';
import { getVideos } from '../../redux/videos/actions';

const mapStateToProps = state => ({
  videos: state.video.videos.filter(video => video.snippet.title.includes(state.video.filterVideoStr)),
});

const mapDispatchToProps = {
  getVideos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
