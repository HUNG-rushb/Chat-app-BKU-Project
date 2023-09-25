import React from 'react';
import './BoxChat.css';
import { Trash } from 'react-bootstrap-icons';

const BoxChatHeader = ({messageData}) => {
  const handleDeleteMessage = () => {}
  return (
    <div className="box-chat-header-container">
      <div className="box-chat-header-left-content">
        <img
          id="box-chat-header-avatar"
          src={messageData?.image} 
          alt=""
        />
        <div className="box-chat-header-name-and-status">
          <span id="box-chat-header-name">{messageData?.name}</span>
        </div>
      </div>
      <div className="box-chat-header-right-content" onClick={handleDeleteMessage}>
        <Trash id="box-chat-header-trash-icon" size={25} />
      </div>
    </div>
  );
};

export default BoxChatHeader;
