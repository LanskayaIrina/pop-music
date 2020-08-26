import { connect } from 'react-redux';

import { Login } from './Login';
import { authUser } from '../../redux/auth/actions';
import { checkUser } from '../../redux/checkedUser/actions';
import { rememberUser } from '../../redux/rememberedUser/actions';

const mapStateToProps = state => ({
  checkedUser: state.checkedUser.user,
  rememberedUser: state.rememberedUser.user,
});

const mapDispatchToProps = {
  authUser,
  checkUser,
  rememberUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
