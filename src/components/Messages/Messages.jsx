import React, { useEffect, useRef } from 'react';
import './Messages.css';
import UserMessage from './UserMessage.jsx';
import UserReverseMessage from './UserReverseMessage.jsx';
import ChatInput from './ChatInput.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetAllChatMessage } from '../../graphql/useMessage';

const Messages = ({ chatId, currentUserId }) => {
  const { messages, hasNextPage, isFetching, fetchError, loadNew, refetch } =
    useGetAllChatMessage(chatId);
  console.log(messages);

  // const scrollToBottomRef = useRef(null);

  // useEffect(() => {
  //   scrollToBottomRef.current.scrollTop =
  //     scrollToBottomRef.current.scrollHeight;
  // }, []);

  return (
    <div className="messages-container">
      {/* <div className="message-content" ref={scrollToBottomRef}> */}
      <div className="message-content">
        <InfiniteScroll
          dataLength={messages.length}
          next={() => {
            loadNew();
          }}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Begin</b>
            </p>
          }
          inverse={true}
        >
          {messages.map((item) => {
            if (item.node.userId === currentUserId) {
              return <UserMessage key={item.node.id} item={item.node} />;
            } else
              return <UserReverseMessage key={item.node.id} item={item.node} />;
          })}
        </InfiniteScroll>
      </div>

      <ChatInput />
    </div>
  );
};

export default Messages;
