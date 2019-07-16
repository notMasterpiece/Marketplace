import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormTextInputSmall = ({name, type, placeholder, onChange}) => {
    return (
        <FormLabel>
            <Input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
            />
        </FormLabel>
    );
};


FormTextInputSmall.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
};



const Input = styled.input`
    background: #F9FAFB;
    border: 1px solid #DEDEE0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px 9px;
`;

const FormLabel = styled.label`
  display: inline-block;
  margin: 0 7px;
`;



export default FormTextInputSmall;