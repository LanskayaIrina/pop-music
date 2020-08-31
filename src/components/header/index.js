import { connect } from 'react-redux';

import { Header } from './Header';
import { searchVideo } from '../../redux/videos/actions';
import { toggleFavorites } from '../../redux/favorites/actions';
import { authUser } from '../../redux/auth/actions';
import { changeTeme } from '../../redux/theme/actions';

const mapStateToProps = state => ({
  checkedUser: state.checkedUser.user[0].name,
  userName: state.auth.userName,
  theme: state.themeApp.theme,
});

const mapDispatchToProps = {
  searchVideo,
  toggleFavorites,
  authUser,
  changeTeme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
