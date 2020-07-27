import { connect } from 'react-redux';

import { Header } from './Header';
import { searchVideo } from '../../redux/videos/actions';

export const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Header);
