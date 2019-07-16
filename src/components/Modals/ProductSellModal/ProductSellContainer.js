import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { withRouter, generatePath } from 'react-router-dom';
import ProductSellView from './ProductSellView';
import { createChat } from '../../../modules/chat/chatOperations';
import { sendMessage } from '../../../modules/message/messageOperations';
import { routes } from '../../../routes';

const enhancer = compose(
  withRouter,
  connect(
    null,
    { createChat, sendMessage },
  ),
  withState('message', 'setMessage', ''),
  withHandlers({
    submit: (props) => async ({ message }) => {
      if (!props.product.chatId) {
        const data = await props.createChat(props.product.id);
        await props.sendMessage(data, message);
        props.history.push(generatePath(routes.message, { id: data }));
        debugger;
      } else {
        debugger;
        await props.sendMessage(props.product.chatId, message);
        props.history.push(
          generatePath(routes.message, { id: props.product.chatId }),
        );
      }
    },
  }),
);

export default enhancer(ProductSellView);
