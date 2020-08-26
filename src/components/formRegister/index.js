import { connect } from 'react-redux';

import { FormRegister } from './FormRegister';
import { authUser } from '../../redux/auth/actions';
import { addUser } from '../../redux/checkedUser/actions';

const mapDispatchToProps = {
  authUser,
  addUser,
};

export default connect(null, mapDispatchToProps)(FormRegister);
