import React from 'react';
import PropTypes from 'prop-types';
import {renderUserPhoto} from "../../helpers/helpers";
import styled from "styled-components";

const User = ({viewer, isUpdate}) => {

    return (
        <UserWrap>
            <UserHead>
                <UserImg>
                    <img src={renderUserPhoto(viewer.avatar)} alt={viewer.fullName}/>
                </UserImg>
                {
                    isUpdate && <Upgrade>
                                    <span>Upgrade Photo</span>
                                    <input type="file" />
                                </Upgrade>
                }
            </UserHead>

            <UserName>{viewer.fullName}</UserName>
            <UserLocation>{viewer.email}</UserLocation>
        </UserWrap>
    );
};

User.propTypes = {
    viewer: PropTypes.object.isRequired,
};


const UserWrap = styled.div`
  text-align: center;
`;

const UserImg = styled.div`
  border-radius: 50%;
  border: 3px solid #349A89;
  width: 95px;
  height: 95px;
  margin: 0 auto 17px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;
const UserName = styled.h2`
  font-size: 20px;
  color: #141414;
  line-height: 24px;
  margin-bottom: 4px;
`;

const UserLocation = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: #9099A7;
`;

const UserHead = styled.div`
  position: relative;
`;


const Upgrade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0; 
  span {
      background: #FFFFFF;
      border: 1px solid #349A89;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 4px 7px;
      font-size: 14px;
      line-height: 15px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #349A89;
      display: inline-block;
      cursor: pointer;
  }
`;


export default User;
