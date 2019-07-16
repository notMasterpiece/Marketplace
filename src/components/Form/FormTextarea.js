import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormTextarea = ({label, value, errors, name, touched, ...props}) => {
    return (
        <label>
            {label && <InputText>{label}</InputText>}
            <Textarea
                className={`${errors[name] && touched[name] ? 'error' : ''}`}
                name={name}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={value}
            />
            <InputError>{errors[name] && touched[name] && errors[name]}</InputError>
        </label>
    );
};

FormTextarea.propTypes = {
    label: PropTypes.string,
};

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  background: #F9FAFB;
  border: 1px solid #DEDEE0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 20px 45px 20px 14px;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 0.4px;
    color: #333;
    height: 173px;
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


const InputError = styled.span`
  font-size: 12px;
  color: #ff5454;
  display: block;
`;



export default FormTextarea;