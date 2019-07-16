import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header/HeaderContainer';
import { ChatAside } from '../../components';
import Spinner from '../../components/Spinner/Spinner';
import { routes } from '../../routes';
import Message from '../Message/MessageContainer';

const height = global.innerWidth > 1000 ? global.innerHeight - 160 : 'auto';

const MessagesWrap = styled.div`
  display: flex;
  flex: 1;
  background-color: #fff;
  position: relative;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

function ChatView({ chats, isLoading }) {
  return (
    <Fragment>
      <Header isSearch={false} />
      <MessagesWrap style={{ height }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <Fragment>
            <ChatAside chats={chats} />
            <Route exact path={routes.message} component={Message} />
          </Fragment>
        )}
      </MessagesWrap>
    </Fragment>
  );
}

ChatView.propTypes = {
  chats: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default ChatView;
