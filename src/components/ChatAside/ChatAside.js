import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, generatePath } from 'react-router-dom';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import styled from 'styled-components';
import { routes } from '../../routes';

const MessagesSidebar = styled.div`
  width: 560px;
  min-width: 560px;
  overflow: auto;
  a {
    display: block;
    text-decoration: none;
    &.selected {
      background-color: #e7e9ed;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const MessagesSidebarItem = styled.div`
  padding: 19px 52px;
  position: relative;
  border-bottom: 1px solid #e7e9ed;
  cursor: pointer;
  &:hover {
    background: #f5f7fb;
  }
  a {
    text-decoration: none;
  }
`;
const MessagesSidebarName = styled.div`
  font-size: 15px;
  line-height: 22px;
  color: #131314;
`;

const MessagesSidebarMessage = styled.div`
  font-size: 15px;
  line-height: 22px;
  color: #97a3b4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    display: inline-block;
    margin-left: 10px;
    font-size: 12px;
  }
`;

const MessagesSidebarDate = styled.div`
  color: rgba(151, 163, 180, 0.783108);
  font-size: 12px;
  line-height: 22px;
  position: absolute;
  top: 21px;
  right: 11px;
`;

function ChatAside({ chats }) {
  return (
    <MessagesSidebar>
      {chats &&
        chats.map((chat) => (
          <NavLink
            activeClassName="selected"
            to={generatePath(routes.message, { id: chat.id })}
            key={chat.id}
          >
            <MessagesSidebarItem>
              {chat.product && (
                <MessagesSidebarName>{chat.product.title}</MessagesSidebarName>
              )}

              <MessagesSidebarMessage>
                {chat.lastMessage && chat.lastMessage.text}
              </MessagesSidebarMessage>

              <MessagesSidebarDate>
                {chat.lastMessage &&
                  distanceInWordsToNow(chat.lastMessage.createdAt, {
                    addSuffix: true,
                  })}
              </MessagesSidebarDate>
            </MessagesSidebarItem>
          </NavLink>
        ))}
    </MessagesSidebar>
  );
}

ChatAside.propTypes = {
  chats: PropTypes.array,
};

export default ChatAside;
