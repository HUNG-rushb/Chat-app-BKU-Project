import React from 'react';
import styled from 'styled-components';
import BoxChatHeader from './BoxChatHeader.jsx';
import Messages from '../Messages/Messages.jsx';
import './BoxChat.css'

const BoxChat = ({item}) => {

  return (
    <div className='box-chat'>
      <BoxChatHeader userCardDetail={item} />
      <div>
        <Messages userCardDetail={item} />
      </div>
    </div>
  );
};

export default BoxChat;
