import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderSearch from './HeaderSearch/HeaderSearchContainer';

import LoginHeader from './LoginHeader';
import LogoutHeader from './LogoutHeader';
import { routes } from '../../routes';

const HeaderView = ({
                      saved,
                      isLight,
                      isSearch,
                      viewer,
                      ...props
                    }) => {

  return (
    <HeaderBlock className={`${isLight ? '' : 'dark'}`}>
      <HeaderLine>
        <Link to={routes.home}>M.A.R.K.E.T</Link>
        <HeaderLineRight>
          {viewer
            ? <LoginHeader {...viewer} saved={saved} {...props} />
            : <LogoutHeader saved={saved}/>
          }
        </HeaderLineRight>
      </HeaderLine>

      {isSearch && <HeaderSearch/>}

    </HeaderBlock>
  );
};


HeaderView.defaultProps = {
  isLight: false,
  isSearch: true,
};

HeaderView.propTypes = {
  isLight: PropTypes.bool.isRequired,
};


const HeaderBlock = styled.header`
  padding: 26px 0;
`;

const HeaderLine = styled.div`
  display: flex;
  align-items: center;
  max-width: 1180px;
  margin: auto;
  color: #fff;
`;

const HeaderLineRight = styled.div`
  margin-left: auto;
`;


export default HeaderView;