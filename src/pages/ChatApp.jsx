import UserList from '../components/UserList/UserList.jsx';
import BoxChat from '../components/BoxChat/BoxChat.jsx';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useCallback, useState, useEffect } from 'react';
import { useGetUserInfo, useGetNewChatUserInfo } from '../graphql/useUser.js';
import _ from 'lodash';

const ChatApp = ({ userId, anotherUser }) => {
  const [anotherUserCurrent, setAnotherUserCurrent] = useState(anotherUser);
  // console.log({ anotherUserCurrent });
  const [activeMessage, setActiveMessage] = useState('');
  // console.log({ activeMessage });

  const { fetchedData: userInfo } = useGetUserInfo(
    {
      userInfoData: { userId },
    },
    setActiveMessage,
    anotherUserCurrent,
  );

  const { fetchedData: newChatUserInfo } = useGetNewChatUserInfo({
    userInfoData: {
      userId: anotherUser.isNewChat
        ? anotherUser.anotherUser
        : '000000000000000000000000',
    },
  });
  // console.log({ newChatUserInfo });

  // useEffect(() => {
  //   if (anotherUserCurrent?.isNewChat) setActiveMessage('new');
  // }, []);

  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <StyledCol sm={3}>
            {userInfo && (
              <UserList
                currentUserId={userId}
                userInfo={userInfo}
                userChats={
                  anotherUserCurrent.isNewChat
                    ? [
                        {
                          isNewChat: true,
                          id: 'new',
                          userIDs: [
                            {
                              ...newChatUserInfo?.userInfo,
                            },
                          ],
                        },
                        ...userInfo.userInfo.chatIDs,
                      ]
                    : userInfo.userInfo.chatIDs
                }
                activeMessage={activeMessage}
                setActiveMessage={setActiveMessage}
                newChatUserInfo={
                  anotherUserCurrent.isNewChat ? newChatUserInfo : null
                }
              />
            )}
          </StyledCol>

          {userInfo && (
            <MessageBox
              currentOtherUser={
                anotherUserCurrent.isNewChat
                  ? [
                      {
                        isNewChat: true,
                        id: 'new',
                        userIDs: [
                          {
                            ...newChatUserInfo?.userInfo,
                          },
                        ],
                      },
                      ...userInfo.userInfo.chatIDs,
                    ]
                  : userInfo.userInfo.chatIDs
              }
              currentUserId={userId}
              chatId={activeMessage}
              setAnotherUserCurrent={setAnotherUserCurrent}
            />
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

const MessageBox = ({
  currentOtherUser,
  currentUserId,
  chatId,
  setAnotherUserCurrent,
}) => {
  // console.log({ currentOtherUser }, 'Message');

  return (
    <StyledCol sm={9}>
      <BoxChat
        currentOtherUser={_.find(
          currentOtherUser.map((chat) => ({
            id: chat.id,
            userIDs: _.filter(chat.userIDs, (user) => {
              return user.id !== currentUserId;
            }),
          })),
          {
            id: chatId,
          },
        )}
        currentUserId={currentUserId}
        chatId={chatId}
        setAnotherUserCurrent={setAnotherUserCurrent}
      />
    </StyledCol>
  );
};

export default ChatApp;

const Wrapper = styled.div`
  /* width: 75%; */
  padding: 5vh 2.5vw 0 2.5vw;
  min-height: 85vh;
`;

const StyledCol = styled(Col)`
  margin: 0;
`;
