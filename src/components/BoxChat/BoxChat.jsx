import React from 'react';
import styled from 'styled-components';
import BoxChatHeader from './BoxChatHeader.jsx';
import Messages from '../Messages/Messages.jsx';
import './BoxChat.css';

const BoxChat = ({
  currentOtherUser,
  chatId,
  currentUserId,
  setAnotherUserCurrent,
}) => {
  return (
    <div className="box-chat">
      {currentOtherUser && (
        <>
          <BoxChatHeader currentOtherUser={currentOtherUser.userIDs[0]} />

          <div>
            <Messages
              chatId={chatId}
              currentUserId={currentUserId}
              newChatUserInfo={null}
              setAnotherUserCurrent={setAnotherUserCurrent}
              currentOtherUser={currentOtherUser.userIDs[0]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BoxChat;
