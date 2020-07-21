import { connect } from 'react-redux';

import { Login } from './Login';
import { authUser } from '../../redux/auth/actions';

const mapDispatchToProps = {
  authUser,
};

export default connect(null, mapDispatchToProps)(Login);
