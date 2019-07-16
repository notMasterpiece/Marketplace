import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const FormTextInput = ({ register, required, name, label, type, value, placeholder, handleChange, changePasswordType, passwordType, handleBlur, icon, errors, touched }) => {
  return (
    <FormLabel>
      {label && <InputText>{label} {required && <Sup>*</Sup>} </InputText>}

      <Input
        className={`${errors[name] && touched[name] ? 'error' : ''}`}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {icon && <Img>{passwordType === 'password' ? <FaEye onClick={changePasswordType}/> :
        <FaEyeSlash onClick={changePasswordType}/>}</Img>}
      <InputError>{errors[name] && touched[name] && errors[name]}</InputError>
      {register.isError && <InputError>{register.error}</InputError>}
    </FormLabel>
  );
};


FormTextInput.defaultProps = {
  errors: {},
  register: {},
  required: false,
};

FormTextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleChangeIcon: PropTypes.func,
  placeholder: PropTypes.string,
  touched: PropTypes.object,
  errors: PropTypes.object,
};


const Sup = styled.sup`
  font-size: 16px;
  color: red;
  top: -0.2em;
`;


const Input = styled.input`
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

const FormLabel = styled.label`
  display: block;
  margin-bottom: 15px;
  position: relative;
  text-align: left;
`;

const Img = styled.div`
  position: absolute;
  top: 40px;
  right: 15px;
  cursor: pointer;
`;

const InputError = styled.span`
  font-size: 12px;
  color: #ff5454;
  display: block;
`;

export default FormTextInput;