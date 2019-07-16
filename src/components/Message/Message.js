import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const MessageText = styled.div`
  background: #00aeef;
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  border-radius: 6px;
  padding: 6px 18px;
  max-width: 400px;
  word-break: break-word;
`;

const MessageItem = styled.div`
  margin-bottom: 15px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-right: 12px solid transparent;
    border-left: 12px solid transparent;
    border-top: 15px solid #00aeef;
    position: absolute;
    left: -12px;
    top: 8px;
  }
  &.own {
    text-align: right;
    &:before {
      left: auto;
      right: -12px;
      border-top: 15px solid #f3f6fa;
    }
    ${MessageText} {
      background: #f3f6fa;
      color: #131314;
    }
  }
`;

const MessageBlock = styled.div`
  min-width: 200px;
  display: inline-block;
`;

const MessageTime = styled.div`
  font-size: 13px;
  line-height: 26px;
  text-align: right;
  color: #97a3b4;
`;

function Message({ message, own }) {
  return (
    <MessageItem className={`${own ? 'own' : ''}`} key={message.id}>
      <MessageBlock>
        <MessageText>{message.text}</MessageText>
        <MessageTime>
          {distanceInWordsToNow(message.createdAt, { addSuffix: true })}
        </MessageTime>
      </MessageBlock>
    </MessageItem>
  );
}

Message.propTypes = {
  message: PropTypes.object,
  own: PropTypes.bool,
};

export default Message;
