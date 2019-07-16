import { compose, withHandlers, withState } from 'recompose';
import PesetPasswordView from './PesetPasswordView';

const enhancer = compose(
  withState('email', 'setEmail', ''),
  withState('isModalOpen', 'setIsModalOpen', false),
  withHandlers({
    openModal: (props) => (values) => {
      props.setIsModalOpen(true);
      props.setEmail(values.email);
    },
    closeModal: (props) => () => {
      props.setIsModalOpen(false);
      props.setEmail('');
    },
  }),
);

export default enhancer(PesetPasswordView);