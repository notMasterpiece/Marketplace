import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Modal from 'react-modal';
import Button from '../../../components/Form/Button';
import ResetPassModal from '../../../components/Modals/ResetPassModal/ResetPassModal';
import { validateEmail } from '../../../validation/validation';


const LoginWrap = styled.div`
  text-align: center;
  margin: 81px 0;
`;

const LoginBlock = styled.div`
  background: #FFFFFF;
  box-shadow: 0 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;
  padding: 25px 24px 21px 24px;
  width: 425px;
  max-width: 100%;
  margin: 0 auto 21px;
  &:hover {
    box-shadow: 0 2px 42px rgba(0, 0, 0, 0.17);
  }
  a {
    color: #349A89;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const LoginTitle = styled.h1`
  font-size: 22px;
  line-height: 25px;
  text-align: center;
  margin: 0 0 32px 0;
`;


const InputBlock = styled.label`
  display: block;
  margin-bottom: 15px;
  position: relative;
  text-align: left;
  input {
    background: #F9FAFB;
    border: 1px solid #DEDEE0;
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


const ResetPasswordViewer = ({ email, isModalOpen, openModal, closeModal }) => {
  return (
    <LoginWrap>
      <LoginBlock>
        <LoginTitle>Restore Password</LoginTitle>

        <Formik
          enableReinitialize
          initialValues={{ email }}
          validationSchema={validateEmail}
          onSubmit={openModal}
          render={({ errors, touched }) => (
            <Form>
              <InputBlock>
                <InputText>Email</InputText>

                <Field
                  name="email"
                  placeholder="Example@gmail.com"
                  className={`${(errors.email && touched.email) ? 'error' : ''}`}
                />
                <InputError>
                  <ErrorMessage name="email" />
                </InputError>
              </InputBlock>

              <Button type="submit">
                Continue
              </Button>

            </Form>
          )}
        />
      </LoginBlock>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <ResetPassModal
          email={email}
          onClose={closeModal}
        />
      </Modal>
    </LoginWrap>
  );
};

ResetPasswordViewer.propTypes = {
  email: PropTypes.string,
  isModalOpen: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ResetPasswordViewer;
