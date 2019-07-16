import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { routes } from '../../routes';
import { SavedIcon } from '..';

const HeaderLineRightUl = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

const SellLink = styled.li`
  a {
    background: #349a89;
    border-radius: 4px;
    padding: 9px 50px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    display: block;
    color: #fff;
  }
`;

const LoginLink = styled.li`
  a {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
  }
`;

const FaRegHeartWrap = styled.div`
  position: relative;
  span {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #3e3961;
    padding: 0 3px;
    border-radius: 3px;
    font-size: 12px;
  }
`;

const LogoutHeader = ({ saved }) => (
  <HeaderLineRightUl>
    <SellLink>
      <Link to={routes.productAdd}>Sell</Link>
    </SellLink>
    <LoginLink>
      <Link to={routes.login}>login</Link>
    </LoginLink>
    <FaRegHeartWrap>
      <SavedIcon saved={saved} />
    </FaRegHeartWrap>
  </HeaderLineRightUl>
);

LogoutHeader.propTypes = {
  saved: PropTypes.number,
};

export default LogoutHeader;
