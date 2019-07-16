import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { routes } from '../../routes';

function SavedIcon({ saved }) {
  return (
    <Link to={routes.saved}>
      {global.location.pathname === routes.saved ? (
        <FaHeart color="#fff" size="20px" />
      ) : (
        <FaRegHeart color="#fff" size="20px" />
      )}
      {saved ? <span>{saved}</span> : null}
    </Link>
  );
}

SavedIcon.propTypes = {
  saved: PropTypes.number,
};

export default SavedIcon;
