import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  withState,
  lifecycle,
  withProps,
} from 'recompose';
import AddProductView from './AddProductView';
import { loadProductPhoto, addNewProduct } from '../../modules/products/productsOperations';


const enhancer = compose(
  connect(
    (state) => ({
      viewer: state.viewer.profile,
      loadPhoto: state.products.loadProductPhoto,
    }),
    { loadProductPhoto, addNewProduct },
  ),
  withState('photos', 'updatePhotos', []),
  withProps({
    initialValues: {
      title: '',
      location: '',
      price: '',
      description: '',
    },
  }),
  withHandlers({
    addPhoto: (props) => (photo) => {
      props.updatePhotos([...props.photos, photo]);
    },

    deletePhoto: (props) => (photo) => {
      const filtered = props.photos.filter((item) => item !== photo);
      props.updatePhotos(filtered);
    },

    handleAddProduct: (props) => (values) => {
      const { history } = props;
      const newProducts = {
        title: values.title,
        description: values.description || 'No description',
        photos: props.photos,
        location: values.location,
        price: parseFloat(values.price),
      };

      props.addNewProduct(newProducts, history);
    },

    onPhotoChange: (props) => (photo) => {
      const formData = new FormData();
      formData.set('image', photo);
      props.loadProductPhoto(formData);
    },
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const { photo } = nextProps.loadPhoto;

      if (photo && !nextProps.photos.includes(photo)) {
        nextProps.addPhoto(nextProps.loadPhoto.photo);
      }
    },
  }),
)


export default enhancer(AddProductView);
