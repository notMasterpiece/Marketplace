import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import SavedView from './SavedView';

import { fetchSavedProduct } from '../../modules/products/productsOperations';
import { getSaveds } from '../../modules/products/productSelectors';

const enhancer = compose(
  withRouter,
  connect(
    (state) => ({
      saved: getSaveds(state),
      isLoading: state.products.saved.isLoading,
      search: state.search.value,
    }),
    { fetchSavedProduct },
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchSavedProduct();
    },
  }),
);

export default enhancer(SavedView);
