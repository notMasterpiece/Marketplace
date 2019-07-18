import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setHame } from '../../helpers/helpers';

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;

function Avatar({ user }) {
  const { photo, fullName, background } = user;

  const color = background || '#3f51b5';

  return (
    <Fragment>
      {photo ? (
        <img src={photo} alt={`avatar ${fullName}`} />
      ) : (
        <Name style={{ background: color }}>{setHame(fullName)}</Name>
      )}
    </Fragment>
  );
}

Avatar.propTypes = {
  user: PropTypes.object,
};

export default Avatar;
