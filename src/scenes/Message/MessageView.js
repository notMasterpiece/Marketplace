import React from 'react';
import styled from 'styled-components';
import { Message, ChatParticipant } from '../../components';

const Form = styled.form`
  margin-top: -58px;
  input {
    padding: 20px;
    width: 100%;
    border-left: 0;
    font-size: 14px;
    background-color: #fff;
    position: relative;
    height: 58px;
    border: 0;
    border-top: 1px solid #e9ebf2;
  }
`;

const MessagesDialogList = styled.div`
  padding: 80px 30px;
  overflow: auto;
  max-height: 100%;
  height: 100%;
`;

const MessagesWrapper = styled.div`
  flex: 1;
  border-left: 1px solid #E9EBF2;
  position: relative;
`;

function MessageView({
   messages,
   message,
   setMessage,
   viewerId,
   chat,
   sendMessage,
   messagesList,
  location
}) {

  let participant;
  if(chat) {
    participant = chat.participants
      ? chat.participants[0]
      : location.state.participant;
  }


  return (
    <MessagesWrapper>

      <ChatParticipant participant={participant} />

      <MessagesDialogList ref={messagesList}>
        {messages.map(message => (
          <Message
            key={message.id}
            message={message}
            own={viewerId === message.ownerId}
          />
        ))}
      </MessagesDialogList>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Type your message here.."
        />
      </Form>
    </MessagesWrapper>
  );
}

MessageView.propTypes = {};

export default MessageView;
