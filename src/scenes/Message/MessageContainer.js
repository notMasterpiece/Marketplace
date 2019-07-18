import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  withHandlers,
  withState,
  withProps,
} from 'recompose';
import MessageView from './MessageView';
import { getMessages } from '../../modules/message/messageSelectors';
import { getChat } from '../../modules/chat/chatSelectors';
import {
  fetchMessages,
  sendMessage,
} from '../../modules/message/messageOperations';

const enhancer = compose(
  withRouter,
  connect(
    (state, props) => ({
        messages: getMessages(state, props.match.params.id),
        viewerId: state.viewer.profile.id,
        chat: getChat(state, props.match.params.id),
      }
    ),
    { fetchMessages, sendMessage, getChat },
  ),
  withState('message', 'setMessage', ''),
  withHandlers({
    sendMessage: (props) => () => {
      props.sendMessage(
        props.location.pathname.replace('/chats/', ''),
        props.message,
      );
      props.setMessage('');
    },
  }),
  withProps({
    messagesList: React.createRef(),
  }),
  lifecycle({
    componentDidMount() {
      if (!this.props.location.state) {
        this.props.fetchMessages(
          this.props.location.pathname.replace('/chats/', ''),
        );
      }
    },
    componentDidUpdate(prevProps) {
      const { id } = this.props.match.params;
      if (id !== prevProps.match.params.id) {
        this.props.fetchMessages(id);
      }
      if (this.props.messagesList.current) {
        this.props.messagesList.current.scrollTop = this.props.messagesList.current.scrollHeight;
      }
    },
  }),
);

export default enhancer(MessageView);
