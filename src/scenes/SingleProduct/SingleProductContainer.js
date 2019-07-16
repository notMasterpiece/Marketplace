import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { withRouter } from 'react-router-dom';
import {
  getProductById,
  saveProduct,
  unSaveProduct,
} from '../../modules/products/productsOperations';
import SingleProductView from './SingleProductView';
import Api from '../../api/api';
import {
  getProduct,
  getProductOwner,
} from '../../modules/products/productSelectors';

import { routes } from '../../routes';

const enhancer = compose(
  withRouter,
  connect(
    (state, props) => ({
      product: getProduct(state, props.match.params.id),
      owner: getProductOwner(state, props.match.params.id),
      isLoading: state.products.product.isLoading,
      isError: state.products.product.isError,
      error: state.products.product.error,
      viewerId: state.viewer.profile.id,
    }),
    { getProductById, saveProduct, unSaveProduct },
  ),
  withState('isModalOpen', 'setIsModalOpen', false),
  withHandlers({
    // eslint-disable-next-line consistent-return
    toggleModal: (props) => () => {
      if (Api.isLoggedIn()) {
        return props.setIsModalOpen(!props.isModalOpen);
      }
      props.history.push(routes.login);
    },

    toggleSaveProduct: (props) => (id) => {
      if (props.product.saved) {
        props.unSaveProduct(id);
      } else {
        props.saveProduct(id);
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      if (!this.props.owner || !this.props.product) {
        this.props.getProductById(this.props.match.params.id);
      }
    },
  }),
);

export default enhancer(SingleProductView);
