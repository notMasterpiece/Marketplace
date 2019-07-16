import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookMessenger } from 'react-icons/fa';
import { routes } from '../../routes';
import { setHame, getRandomColor } from '../../helpers/helpers';
import { SavedIcon } from '..';

const HeaderLineRightUl = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const ViewerBlock = styled.li`
  position: relative;
  margin-right: 40px;
`;

const ViewerAvatar = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: ${getRandomColor()};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(19, 15, 2, 0.72);
  line-height: 1px;
  font-size: 14px;
  cursor: pointer;
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
    margin-right: 40px;
    color: #fff;
  }
`;

const ViewerPopup = styled.ul`
  padding: 0;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  width: 210px;
  position: absolute;
  top: 50px;
  right: 0;
  margin: 0;
  z-index: 2;
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    background-color: transparent;
    height: 20px;
  }
`;

const ViewerInfoLi = styled.li`
   display: block;
   width: 100%;
   color: #349A89;
   text-transform: uppercase;
  padding: 14px 16px;
   cursor: pointer;
   &:hover {
    background-color: #F8F8F8;
   }
   &:last-child {
    border-top: 1px solid #E4E4E4;
   }
   a {
    color: #349a89; 
   }
`;
const ViewerInfo = styled.li`
   display: flex;
   padding: 9px 16px 0 16px;
`;

const ViewerPopupDescr = styled.div`
  padding-left: 10px;
  flex: 1;
  width: calc(100% - 25px);
`;
const ViewerPopupName = styled.div`
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1px;
  color: #000;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ViewerPopupEmail = styled(ViewerPopupName)`
  a {
    color: #979797;
  }
`;
const ViewerMeLink = styled(ViewerPopupName)`
  a {
    color: #349A89;
  } 
  
`;
const FaRegHeartWrap = styled.div`
  position: relative;
  span {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #3E3961;
    padding: 0 3px;
    border-radius: 3px;
    font-size: 12px;
  }
`;

const Chat = styled.li`
  margin-right: 30px;
  margin-top: 7px;
`;

function LoginHeader({
                       fullName,
                       saved,
                       email,
                       id,
                       showHeaderPopup,
                       setHeaderPopup,
                       logoutHandle,
                     }) {
  return (
    <HeaderLineRightUl>
      <Chat>
        <Link to={routes.chat}>
          <FaFacebookMessenger color="#fff" size="20px" />
        </Link>
      </Chat>
      {global.location.pathname !== routes.productAdd ? (
        <SellLink>
          <Link
            to={{
              pathname: routes.productAdd,
              state: { modal: true },
            }}
          >
            Sell
          </Link>
        </SellLink>
      ) : null}
      <ViewerBlock onMouseLeave={() => setHeaderPopup(false)}>
        <ViewerAvatar onMouseEnter={() => setHeaderPopup(true)}>
          {setHame(fullName)}
        </ViewerAvatar>
        {showHeaderPopup && (
          <ViewerPopup>
            <ViewerInfo>
              <ViewerAvatar title={fullName}>
                {setHame(fullName)}
              </ViewerAvatar>
              <ViewerPopupDescr>
                <ViewerPopupName title={fullName}>
                  {fullName}
                </ViewerPopupName>
                <ViewerPopupEmail title={email}>
                  {email}
                </ViewerPopupEmail>
                <ViewerMeLink>
                  <Link
                    style={{ color: '#349A89' }}
                    to={`/users/${id}/products`}
                  >
                    Profile
                  </Link>
                </ViewerMeLink>
              </ViewerPopupDescr>
            </ViewerInfo>
            <ViewerInfoLi>
              <Link style={{ color: '#349A89' }} to={routes.me}>
                Edit profile
              </Link>
            </ViewerInfoLi>
            <ViewerInfoLi onClick={() => logoutHandle()}>
              Logout
            </ViewerInfoLi>
          </ViewerPopup>
        )}
      </ViewerBlock>
      <FaRegHeartWrap>
        <SavedIcon saved={saved} />
      </FaRegHeartWrap>
    </HeaderLineRightUl>
  );
}

export default LoginHeader;
