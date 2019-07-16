import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import ChatView from './ChatView';
import { fetchChats } from '../../modules/chat/chatOperations';
import { getChatsWithLastMessages } from '../../modules/chat/chatSelectors';

const enhancer = compose(
  withRouter,
  connect(
    (state) => ({
      chats: getChatsWithLastMessages(state),
      isLoading: state.chats.isLoading,
    }),
    { fetchChats },
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchChats();
    },
  }),
);

export default enhancer(ChatView);
