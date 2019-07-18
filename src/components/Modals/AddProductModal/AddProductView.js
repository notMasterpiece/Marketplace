import React, { useRef } from 'react';
import { Formik } from 'formik';
import Button from '../../Form/Button';
import FormTextInput from '../../Form/FormTextInput';
import FormTextarea from '../../Form/FormTextarea';
import Photos from '../../Photos/PhotosView';
import { isANumber } from '../../../helpers/helpers';
import Api from '../../../api/api';
import { Redirect } from 'react-router-dom';

const auth = {
  pathname: '/auth/login',
  state: { fromNewProduct: true },
};

const RegisterView = ({ loadPhoto, title, location, description, photos, price, handleAddProduct, onPhotoChange, deletePhoto, history, ...props }) => {

  let modalWrap = useRef();

  if (!Api.isLoggedIn()) {
    return <Redirect to={auth} />;
  }

  return (
    <div
      ref={modalWrap}
      onClick={e => {
        if (e.target === modalWrap.current) {
          e.stopPropagation();
          history.goBack();
        }

      }}
      style={{
        position: 'fixed',
        background: 'rgba(0,0,0,.34)',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 5
      }}

    >

      <div
        style={{
          display: 'inline-block',
          width: '1136px',
        }}

      >

        <div className='block'>
          <h1>Add product</h1>


          <Formik
            initialValues={{ title, location, description, photos, price }}
            validate={values => {
              let errors = {};
              if (!values.title.trim()) {
                errors.title = 'Required';
              }

              if (!values.location.trim()) {
                errors.location = 'Required';
              }

              if (!values.price.trim()) {
                errors.price = 'Required';
              } else if (!isANumber(values.price)) {
                errors.price = 'Price should be number';
              }

              return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleAddProduct(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
              <form onSubmit={handleSubmit} className='block__form-wrap'>
                <FormTextInput
                  label='Title'
                  placeholder='For example: Iron man suit'
                  required={true}
                  type='text'
                  name='title'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.title}
                  errors={errors}
                  touched={touched}
                />
                <FormTextInput
                  label='Location'
                  placeholder='For example: Los Angeles, CA'
                  required={true}
                  type='text'
                  name='location'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.location}
                  errors={errors}
                  touched={touched}
                />

                <FormTextarea
                  label='Description'
                  name='description'
                  value={values.description}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <Photos
                  loadPhoto={loadPhoto}
                  onPhotoChange={onPhotoChange}
                  photos={photos}
                  deletePhoto={deletePhoto}
                />

                <FormTextInput
                  label='Price'
                  placeholder='For example: $100'
                  required={true}
                  type='text'
                  name='price'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.price}
                  errors={errors}
                  touched={touched}
                />
                <div className="text-center">
                  <Button
                    type="submit"
                    isSubmitting={isSubmitting}
                  >
                    Register
                  </Button>
                </div>


              </form>
            )}
          </Formik>
        </div>
      </div>

    </div>
  );
};

RegisterView.propTypes = {};

export default RegisterView;
