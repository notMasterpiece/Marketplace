import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from '../../components/Spinner/Spinner';
import Cards from '../../components/Card/CardListContainer';
import { Avatar } from '../../components';

const UserWrap = styled.div`
  text-align: center;
`;

const UserImg = styled.div`
  border-radius: 50%;
  border: 3px solid #349a89;
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
  color: #9099a7;
`;

function UserView({ profile, products, isError }) {
  if (isError) {
    return <div className="block error-block">User not found (( </div>;
  }

  if (!profile && !products.length) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="block">
        <UserWrap>
          <UserImg>
            <Avatar user={profile} />
          </UserImg>
          <UserName>{profile.fullName}</UserName>
          <UserLocation>{profile.location}</UserLocation>
        </UserWrap>

        <div className="cards">
          <Cards products={products} />
        </div>
      </div>
    </div>
  );
}

UserView.propTypes = {
  profile: PropTypes.object,
  products: PropTypes.array,
  isError: PropTypes.bool,
};

export default UserView;
