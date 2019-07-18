import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import Button from '../../Form/Button';
import { Avatar } from '../..';
import { validateMessage } from '../../../validation/validation';

const ModalUserDescr = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  h2 {
    margin: 0;
    font-size: 24px;
    line-height: 28px;
    color: #2b2b2b;
  }
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

const UserAvatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

const InputBlock = styled.label`
  display: block;
  margin-bottom: 15px;
  position: relative;
  text-align: left;
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

const ProductSellView = ({ product, owner, submit, message, onClose }) => (
  <Fragment>
    <IoIosClose
      onClick={onClose}
      size={40}
      color="#349A89"
      className="modal-close"
    />
    <ModalTitle>Contact seller</ModalTitle>
    <ModalSubject>
      {`Subject: `}
      {product.title}
    </ModalSubject>
    <ModalUser>
      <UserAvatar>
        <Avatar user={owner} />
      </UserAvatar>
      <ModalUserDescr>
        <h2>{owner.fullName}</h2>
      </ModalUserDescr>
    </ModalUser>
    <Formik
      initialValues={{ message }}
      validationSchema={validateMessage}
      onSubmit={submit}
      render={({ errors, touched }) => (
        <Form>
          <InputBlock>
            <InputText>Messages</InputText>

            <Field
              name="message"
              component="textarea"
              className={`${errors.message && touched.message ? 'error' : ''}`}
            />
            <InputError>
              <ErrorMessage name="message" />
            </InputError>
          </InputBlock>

          <div className="text-center">
            <Button
              type="submit"
              // isSubmitting={isSubmitting}
            >
              Send message
            </Button>
          </div>
        </Form>
      )}
    />
  </Fragment>
);

ProductSellView.propTypes = {
  product: PropTypes.object,
  owner: PropTypes.object,
  submit: PropTypes.func,
  message: PropTypes.string,
  onClose: PropTypes.func,
};

export default ProductSellView;
