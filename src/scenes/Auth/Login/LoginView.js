import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../components/Form/Button';
import { routes } from '../../../routes';

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
    color: #349a89;
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

const ResetPass = styled.div`
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #8C8C8C;
    text-align: right;
    margin: 0 0 15px 0;
    a {
      color: #8C8C8C;
      text-decoration: none;
        &:hover {
        text-decoration: underline;
      }
    }
    
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


const LoginView = ({
                     initialValues,
                     login,
                     validationSchema,
                     handleLogin,
                     isSubmitting,
                   }) => (
  <LoginWrap>
    <LoginBlock>

      {login.isError && <div className='block small error-block'>{login.error}</div>}

      <LoginTitle>Login</LoginTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
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


            <InputBlock>
              <InputText>Password</InputText>
              <Field
                name="password"
                className={`${(errors.password && touched.password) ? 'error' : ''}`}
              />
              <InputError>
                <ErrorMessage name="password" />
              </InputError>
            </InputBlock>

            <ResetPass>
              <Link to={routes.reset}>Don’t remember password?</Link>
            </ResetPass>


            <Button
              type="submit"
              isSubmitting={isSubmitting}
            >
              Continue
            </Button>

          </Form>
        )}
      />

    </LoginBlock>

    <LoginBlock>
      I have no account,
      {' '}
      <Link to={routes.register}>
        REGISTER NOW
      </Link>
    </LoginBlock>

  </LoginWrap>
);

LoginView.propTypes = {
  initialValues: PropTypes.object,
  login: PropTypes.object,
  validationSchema: PropTypes.object,
  handleLogin: PropTypes.func,
  isSubmitting: PropTypes.bool,
};


export default LoginView;
