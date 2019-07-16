import React from 'react';
import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';

const ResetPassModal = ({ onClose, email }) => {
  return (
    <div>
      <IoIosClose
        onClick={onClose}
        size={40}
        color='#349A89'
        className='modal-close'
      />
      <p>
        Check your email
        <strong> { email } </strong>
        for a link to reset your password. <br />
        If it doesn’t appear within a few minutes, check your spam folder.
      </p>
    </div>
  );
};

ResetPassModal.propTypes = {
  email: PropTypes.string,
  onClose: PropTypes.func,
};

export default ResetPassModal;