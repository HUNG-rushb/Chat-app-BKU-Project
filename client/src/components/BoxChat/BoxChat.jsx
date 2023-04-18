import React from 'react';
import styled from 'styled-components';
import BoxChatHeader from './BoxChatHeader.jsx';
import Messages from '../Messages/Messages.jsx';

const Wrapper = styled.div`
  border: 2px solid gray;
  border-radius: 5px;
  background-color: red;
`;

const BoxChat = () => {
  return (
    <Wrapper>
      <BoxChatHeader />

      <div>
        <Messages />
      </div>
    </Wrapper>
  );
};

export default BoxChat;
