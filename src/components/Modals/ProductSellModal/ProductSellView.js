import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { renderPhoto } from '../../../helpers/helpers';

import FormTextarea from '../../../components/Form/FormTextarea';
import Button from '../../../components/Form/Button';
import { IoIosClose } from 'react-icons/io';
import { Formik } from 'formik';


const ModalUserDescr = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  h2 {
    margin: 0;
    font-size: 24px;
    line-height: 28px;
    color: #2B2B2B;
  }
`;


const Form = styled.form`
  text-align: left;
`;

const ModalUser = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    overflow: hidden;
  }
`;
const ModalTitle = styled.div`
    font-size: 22px;
    line-height: 25px;
    color: #282828;
    margin-bottom: 29px;
`;
const ModalSubject = styled.div`
    font-size: 24px;
    line-height: 28px;
    color: #373738;
    margin-bottom: 16px;
    text-align: left;
`;

const ProductSellView = ({ product, owner, submit, message, onClose }) => {
  return (
    <Fragment>
      <IoIosClose
        onClick={onClose}
        size={40}
        color='#349A89'
        className={'modal-close'}
      />
      <ModalTitle>Contact seller</ModalTitle>
      <ModalSubject>Subject: {product.title}</ModalSubject>
      <ModalUser>
        <div>
          <img src={renderPhoto(owner.avatar)} alt={`avatar ${owner.fullName}`} />
        </div>
        <ModalUserDescr>
          <h2>{owner.fullName}</h2>
          {
            owner.location && <p>{owner.location}</p>
          }

        </ModalUserDescr>
      </ModalUser>


      <Formik
        initialValues={{ message }}
        validate={values => {
          const errors = {};
          if (!values.message.trim()) {
            errors.message = 'Required';
          }
          return errors;
        }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            submit(values);
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
          <Form onSubmit={handleSubmit}>

            <FormTextarea
              label='Messages'
              name='message'
              value={values.message}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <div className="text-center">
              <Button
                type="submit"
                isSubmitting={isSubmitting}
              >
                Continue
              </Button>
            </div>
          </Form>
        )}
      </Formik>

    </Fragment>
  );
};

ProductSellView.propTypes = {
  product: PropTypes.object,
};

export default ProductSellView;