import { connect } from 'react-redux';

import { VideoPlayer } from './VideoPlayer';

const mapStateToProps = state => ({
  isPlayingVideoId: state.video.isPlayingVideoId,
});

export default connect(mapStateToProps, null)(VideoPlayer);
