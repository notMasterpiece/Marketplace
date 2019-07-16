import { withHandlers, compose } from 'recompose';
import { connect } from 'react-redux';
import CardView from './CardView';
import {
  saveProduct,
  unSaveProduct,
} from '../../modules/products/productsOperations';

const enhancer = compose(
  connect(
    null,
    { saveProduct, unSaveProduct },
  ),
  withHandlers({
    likeHandler: (props) => () => {
      if (props.product.saved) {
        props.unSaveProduct(props.product.id);
      } else {
        props.saveProduct(props.product.id);
      }
    },
  }),
);

export default enhancer(CardView);
