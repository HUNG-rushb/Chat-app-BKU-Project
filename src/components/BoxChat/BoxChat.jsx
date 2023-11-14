import React from 'react';
import styled from 'styled-components';
import BoxChatHeader from './BoxChatHeader.jsx';
import Messages from '../Messages/Messages.jsx';
import './BoxChat.css';

const BoxChat = ({ currentOtherUser, chatId, currentUserId }) => {
  console.log({ currentOtherUser });
  return (
    <div className="box-chat">
      <BoxChatHeader currentOtherUser={currentOtherUser.userIDs[0]} />

      <div>
        <Messages chatId={chatId} currentUserId={currentUserId} />
      </div>
    </div>
  );
};

export default BoxChat;
