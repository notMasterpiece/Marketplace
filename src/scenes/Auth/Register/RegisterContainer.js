import { connect } from 'react-redux';
import { compose, withHandlers, withStateHandlers } from 'recompose';
import RegisterView from './RegisterView';

import { userRegister } from '../../../modules/auth/authOperations';

const enhancer = compose(
  connect(state => ({
    register: state.auth.register,
  }), { userRegister }),

  withStateHandlers(
    { email: '', fullName: '', password: '', passwordConfirm: '', passwordType: 'password' },
    {
      changePasswordType: ({ passwordType }) => () => ({
        passwordType: (passwordType === 'text' ? 'password' : 'text'),
      }),
    },
  ),
  withHandlers({
    handleRegister: (props) => (values) => {
      const newUser = {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      };
      const { history } = props;
      props.userRegister(newUser, history);
    },
  }),
);


export default enhancer(RegisterView);
