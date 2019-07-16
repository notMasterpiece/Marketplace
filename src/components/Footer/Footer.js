import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {routes} from '../../routes';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <FooterBlock>
            <FooterUl>
                <FooterLi>Copyright © {year}</FooterLi>
                <FooterLi><Link to={routes.privacy}>Privacy</Link></FooterLi>
                <FooterLi><Link to={routes.policy}>Policy</Link></FooterLi>
            </FooterUl>
        </FooterBlock>
    );
};

const FooterBlock = styled.footer`
  text-align: center;
  padding: 25px 0;
  background: rgba(192, 196, 206, 0.127321);
`;

const FooterUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;


const FooterLi = styled.li`
    display: inline-block;
    color: #C0C4CE;
    a {
      color: #C0C4CE;
      text-decoration: none;
      &:hover {
          text-decoration: underline;
      }
    }
    &:not(:last-child) {
    margin-right: 15px;
`;

export default Footer;