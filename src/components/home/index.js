import { Home } from './Home';

import { connect } from 'react-redux';

import { getVideos } from '../../redux/videos/actions';

const mapStateToProps = state => ({
  videos: state.video.videos.filter(video => video.snippet.title.includes(state.video.filterVideoStr)),
  theme: state.themeApp.theme,
});

const mapDispatchToProps = {
  getVideos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
