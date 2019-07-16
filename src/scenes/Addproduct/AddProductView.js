import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Form/Button';
import Photos from '../../components/Photos/PhotosView';
import Header from '../../components/Header/HeaderContainer';
import Api from '../../api/api';
import { addProductSchema } from '../../validation/validation';

const InputBlock = styled.label`
  display: block;
  margin-bottom: 15px;
  position: relative;
  text-align: left;
  input {
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    padding: 20px 45px 20px 14px;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 0.4px;
    color: #333;
    &::placeholder {
      color: rgba(102, 102, 102, 0.466455);
    }
  }
  textarea {
    width: 100%;
    resize: none;
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 20px 45px 20px 14px;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 0.4px;
    color: #333;
    height: 173px;
  }
`;

const InputText = styled.span`
  margin: 15px 0 4px;
  display: block;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #303030;
`;

const InputError = styled.div`
  font-size: 14px;
  color: #ff5454;
  display: block;
`;

const Sup = styled.sup`
  font-size: 16px;
  color: red;
  top: -0.2em;
`;

const auth = {
  pathname: '/auth/login',
  state: { fromNewProduct: true },
};

function RegisterView({
  initialValues,
  loadPhoto,
  photos,
  handleAddProduct,
  onPhotoChange,
  deletePhoto,
}) {
  if (!Api.isLoggedIn()) {
    return <Redirect to={auth} />;
  }

  return (
    <div>
      <Header isSearch={false} />

      <div className="block">
        <h1>Add product</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={addProductSchema}
          onSubmit={handleAddProduct}
          render={({ errors, touched }) => (
            <Form className="block__form-wrap">
              <InputBlock>
                <InputText>
                  Title
                  <Sup>*</Sup>
                </InputText>

                <Field
                  name="title"
                  placeholder="For example: Iron man suit"
                  className={`${errors.title && touched.title ? 'error' : ''}`}
                />
                <InputError>
                  <ErrorMessage name="title" />
                </InputError>
              </InputBlock>

              <InputBlock>
                <InputText>
                  Location
                  <Sup>*</Sup>
                </InputText>
                <Field
                  name="location"
                  placeholder="For example: Los Angeles, CA"
                  className={`${
                    errors.location && touched.location ? 'error' : ''
                  }`}
                />
                <InputError>
                  <ErrorMessage name="location" />
                </InputError>
              </InputBlock>

              <InputBlock>
                <InputText>Description</InputText>
                <Field component="textarea" name="Description" />
                <InputError>
                  <ErrorMessage name="description" />
                </InputError>
              </InputBlock>

              <Photos
                loadPhoto={loadPhoto}
                onPhotoChange={onPhotoChange}
                photos={photos}
                deletePhoto={deletePhoto}
              />

              <InputBlock>
                <InputText>
                  Price
                  <Sup>*</Sup>
                </InputText>
                <Field
                  name="price"
                  placeholder="For example: $100"
                  className={`${errors.price && touched.price ? 'error' : ''}`}
                />
                <InputError>
                  <ErrorMessage name="price" />
                </InputError>
              </InputBlock>

              <div className="text-center">
                <Button
                  type="submit"
                  // isSubmitting={isSubmitting}
                >
                  Add
                </Button>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  );
}

RegisterView.propTypes = {
  initialValues: PropTypes.object,
  loadPhoto: PropTypes.func,
  photos: PropTypes.array,
  handleAddProduct: PropTypes.func,
  onPhotoChange: PropTypes.func,
  deletePhoto: PropTypes.func,
};

export default RegisterView;
