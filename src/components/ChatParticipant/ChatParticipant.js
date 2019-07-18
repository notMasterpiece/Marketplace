import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '..';

const MessageUserBlock = styled.div`
  background-color: #f5f7fb;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 17px;
  width: 100%;
  z-index: 1;
`;

const MessageUserAvatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;
const MessageUserName = styled.div`
  color: #131314;
  font-size: 15px;
  text-decoration: none;
`;

const MessageUserLeft = styled.div`
  a {
    display: flex;
    text-decoration: none;
    color: #131314;
    font-size: 15px;
    align-items: center;
  }
`;

function ChatParticipant({ participant }) {
  if (!participant) {
    return null;
  }

  const { fullName, id } = participant;
  return (
    <MessageUserBlock>
      <MessageUserLeft>
        <Link to={`/users/${id}/products`}>
          <MessageUserAvatar>
            <Avatar user={participant} />
          </MessageUserAvatar>
          <MessageUserName>{fullName}</MessageUserName>
        </Link>
      </MessageUserLeft>
    </MessageUserBlock>
  );
}

ChatParticipant.propTypes = {
  participant: PropTypes.object,
};

export default ChatParticipant;
