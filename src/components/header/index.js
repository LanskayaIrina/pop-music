import { connect } from 'react-redux';

import { Header } from './Header';
import { searchVideo } from '../../redux/videos/actions';
import { toggleFavorites } from '../../redux/favorites/actions';
import { authUser } from '../../redux/auth/actions';

export const mapDispatchToProps = {
  searchVideo,
  toggleFavorites,
  authUser,
};

export default connect(null, mapDispatchToProps)(Header);
