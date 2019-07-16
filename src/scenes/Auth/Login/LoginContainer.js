import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  withProps,
  withState,
  lifecycle,
} from 'recompose';
import LoginView from './LoginView';
import { userLogin } from '../../../modules/auth/authOperations';
import { validateLogin } from '../../../validation/validation';

const enhancer = compose(
  connect(
    (state) => ({
      login: state.auth.login,
    }),
    { userLogin },
  ),
  withState('isSubmitting', 'setIsSubmitting', false),
  withProps({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validateLogin,
  }),
  withHandlers({
    handleLogin: (props) => (values) => {
      props.setIsSubmitting(true);

      const newUser = {
        email: values.email,
        password: values.password,
      };
      const { state } = props.location;
      const { history } = props;
      props.userLogin(newUser, history, state);
    },
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { isLoading } = prevProps.login;
      if (isLoading) {
        this.props.setIsSubmitting(false);
      }
    },
    componentWillUnmount() {
      this.props.setIsSubmitting(false);
      this.props.login.isError = null;
    },
  }),
);

export default enhancer(LoginView);
