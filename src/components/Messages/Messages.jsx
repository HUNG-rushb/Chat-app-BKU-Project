import React from 'react';
import './Messages.css';
import UserMessage from './UserMessage.jsx';
import UserReverseMessage from './UserReverseMessage.jsx';
import ChatInput from './ChatInput.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetAllChatMessage } from '../../graphql/useMessage';

const Messages = ({
  chatId,
  currentUserId,
  setAnotherUserCurrent,
  currentOtherUser,
}) => {
  const { messages, hasNextPage, isFetching, fetchError, loadNew, refetch } =
    useGetAllChatMessage(
      chatId === 'new' ? '000000000000000000000000' : chatId,
    );
  // console.log(messages);

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
          height={550}
          dataLength={chatId === 'new' ? 0 : messages.length}
          next={
            chatId === 'new'
              ? () => {}
              : () => {
                  loadNew();
                }
          }
          hasMore={chatId === 'new' ? false : hasNextPage}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>{chatId === 'new' ? 'Start conversation' : 'Begin'}</b>
            </p>
          }
          inverse={true}
          style={{ display: 'flex', flexDirection: 'column-reverse' }}
          scrollableTarget="message-content"
        >
          {chatId === 'new' ? (
            <></>
          ) : (
            messages.map((item) => {
              if (item.node.userId.id === currentUserId) {
                return <UserMessage key={item.node.id} item={item.node} />;
              } else
                return (
                  <UserReverseMessage key={item.node.id} item={item.node} />
                );
            })
          )}
        </InfiniteScroll>
      </div>

      <ChatInput
        chatId={chatId}
        currentUserId={currentUserId}
        newChat={!messages.length}
        setAnotherUserCurrent={setAnotherUserCurrent}
        currentOtherUser={currentOtherUser}
      />
    </div>
  );
};

export default Messages;
