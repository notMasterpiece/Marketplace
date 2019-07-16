import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import UserView from './UserView';
import {
  getUserInfo,
  getUserProducts,
} from '../../modules/profile/profileOperations';
import { getUser, getProducts } from '../../modules/profile/profileSelectors';

const enhancer = compose(
  withRouter,
  connect(
    (state, props) => ({
      profile: getUser(state, props.match.params.id),
      isLoading: state.profile.isLoading,
      products: getProducts(state),
      isError: state.profile.isError,
    }),
    { getUserInfo, getUserProducts },
  ),
  lifecycle({
    componentDidMount() {
      const { id } = this.props.match.params;
      if (!this.props.profile) {
        this.props.getUserInfo(id);
      }
      this.props.getUserProducts(id);
    },
  }),
);

export default enhancer(UserView);
