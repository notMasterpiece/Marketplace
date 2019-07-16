import * as Yup from 'yup';

export const validateLogin = Yup.object().shape({
  email: Yup.string().required('Field required').email('Incorrect email'),
  password: Yup.string().required('Field required').min(6, 'Field must be more 6'),
});

export const validateEmail = Yup.object().shape({
  email: Yup.string().required('Field required').email('Incorrect email')
});

export const addProductSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required('Title is required'),
  location: Yup.string()
    .trim()
    .required('Location is required'),
  description: Yup.string(),
  price: Yup.number('Must be a number')
    .required('Number is required')
    .integer('Must be a number'),
});
