import React, { useEffect, useRef, useState } from 'react';
import './Messages.css';
import UserMessage from './UserMessage.jsx';
import UserReverseMessage from './UserReverseMessage.jsx';
import ChatInput from './ChatInput';

const Messages = ({ messageData }) => {
  const scrollToBottomRef = useRef(null);
  const [data, setData] = useState(messageData.messages);

  useEffect(() => {
    scrollToBottomRef.current.scrollTop = scrollToBottomRef.current.scrollHeight;
  }, []);

  return (
    <div className="messages-container">  
        <div className="message-content" ref={scrollToBottomRef}>
          {data.map((item, index) => {
            if (item.userId === 1) {
              return <UserMessage key={index} item={item} />;
            } else return <UserReverseMessage key={index} item={item} />;
          })}
        </div>
        <ChatInput data={data} setData={setData} />
    </div>
  );
};

export default Messages;
