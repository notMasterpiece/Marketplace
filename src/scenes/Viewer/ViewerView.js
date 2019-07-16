import React from 'react';
import styled from 'styled-components';
import {Formik} from 'formik';

import Button from '../../components/Form/Button';
import FormTextInput from '../../components/Form/FormTextInput';
import User from '../../components/User/User';

import {isANumber} from "../../helpers/helpers";

const LoginView = ({fullName, phone, avatar, viewer, changeUserInfo}) => {

    return (

        <ViewerWrap>
            <ViewerBlock>

                {/*{login.isError && <div className='block small error-block'>{login.error}</div>}*/}

                <LoginTitle>Edit profile</LoginTitle>
                <Formik
                    initialValues={{fullName, avatar, phone}}
                    validate={values => {
                        let errors = {};
                        if (!values.fullName.trim()) {
                            errors.fullName = 'Required';
                        } else if (values.fullName.length <= 5) {
                            errors.fullName = 'more 6';
                        }


                        if (!values.phone.trim()) {
                            errors.phone = 'Required';
                        } else if (!isANumber(values.phone)) {
                            errors.phone = 'Price should be number';
                        }

                        return errors;
                    }}

                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            changeUserInfo(values);
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


                            <User
                                viewer={viewer}
                                isUpdate
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
                                label='Phone number'
                                name="phone"
                                type='text'
                                placeholder='+380 95 675 867'
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.phone}
                                errors={errors}
                                touched={touched}
                            />

                            <Button
                                type="submit"
                                isSubmitting={isSubmitting}
                            >
                                Save
                            </Button>
                        </form>
                    )}
                </Formik>
            </ViewerBlock>
        </ViewerWrap>
    );
};

LoginView.propTypes = {};


const ViewerWrap = styled.div`
      text-align: center;
      margin: 34px 0;
    `;

const ViewerBlock = styled.div`
      background: #FFFFFF;
      box-shadow: 0 2px 42px rgba(0, 0, 0, 0.111233);
      border-radius: 7px;
      padding: 35px 60px 30px 60px;
      width: 500px;
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


export default LoginView;