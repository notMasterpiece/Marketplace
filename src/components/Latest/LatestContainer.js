import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import LatestView from './LatestView';
import {
  fetchLatest,
  saveProduct,
  unSaveProduct,
} from '../../modules/products/productsOperations';
import {
  addToLike,
  removeFromLike,
} from '../../modules/viewer/viewerOperations';

import { getLatest } from '../../modules/products/productSelectors';

const enhancer = compose(
  connect((state) => ({
      latest: getLatest(state),
      isLoading: state.products.latest.isLoading,
      isError: state.products.latest.isError,
      search: state.search.value,
    }),
    { fetchLatest, addToLike, removeFromLike, saveProduct, unSaveProduct },
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchLatest();
    },
  }),
);

export default enhancer(LatestView);
