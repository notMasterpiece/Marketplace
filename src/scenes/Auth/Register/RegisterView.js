import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Formik} from 'formik';

import {routes} from '../../../routes';
import Button from '../../../components/Form/Button';
import FormTextInput from '../../../components/Form/FormTextInput';

const RegisterView = ({register, email, fullName, password, passwordConfirm, passwordType, changePasswordType, handleRegister}) => {

    return (
        <LoginWrap>
            <LoginBlock>
                <LoginTitle>Register</LoginTitle>
                <Formik
                    initialValues={{email, fullName, password, passwordConfirm, passwordType}}
                    validate={values => {
                        let errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.fullName) {
                            errors.fullName = 'Required';
                        } else if (values.fullName.length <= 5) {
                            errors.fullName = 'password length > 6';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length <= 5) {
                            errors.password = 'password length > 6';
                        }

                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'Required';
                        } else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = "password doesn't match";
                        }

                        return errors;
                    }}

                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            handleRegister(values);
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
                        <form onSubmit={handleSubmit}>
                            <FormTextInput
                                label='Email'
                                placeholder='Example@gmail.com'
                                type='text'
                                name='email'
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.email}
                                errors={errors}
                                register={register}
                                touched={touched}
                            />

                            <FormTextInput
                                label='full name'
                                placeholder='Tony Stark'
                                type='text'
                                name='fullName'
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.fullName}
                                errors={errors}
                                touched={touched}

                            />

                            <FormTextInput
                                label='Password'
                                name="password"
                                type={passwordType}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                changePasswordType={changePasswordType}
                                value={values.password}
                                errors={errors}
                                touched={touched}
                                passwordType={passwordType}
                                icon={true}
                            />


                            <FormTextInput
                                label='Password again'
                                name="passwordConfirm"
                                type={passwordType}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                changePasswordType={changePasswordType}
                                value={values.passwordConfirm}
                                errors={errors}
                                touched={touched}
                                passwordType={passwordType}
                                icon={true}
                            />

                            <Button
                                isLoading={register.isLoading}
                                type="submit"
                                isSubmitting={isSubmitting}
                            >
                                Register
                            </Button>
                        </form>
                    )}
                </Formik>
            </LoginBlock>

            <LoginBlock>
                I already have an account,
                {' '}<Link to={routes.login}>LOG IN</Link>
            </LoginBlock>
        </LoginWrap>
    );
};

RegisterView.propTypes = {};


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

// const ResetPass = styled.div`
//     font-size: 14px;
//     line-height: 16px;
//     letter-spacing: 0.4px;
//     color: #8C8C8C;
//     text-align: right;
//     margin: 0 0 15px 0;
//     a {
//       color: #8C8C8C;
//       text-decoration: none;
//         &:hover {
//         text-decoration: underline;
//       }
//     }
//
// `;


export default RegisterView;