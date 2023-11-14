import React from 'react';
import UserCard from './UserCard.jsx';
import UserListHeader from './UserListHeader.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ffdab9;
`;

const UserList = ({
  currentUserId,
  userInfo,
  messageData,
  activeMessage,
  setActiveMessage,
}) => {
  return (
    <Wrapper>
      <UserListHeader userInfo={userInfo?.userInfo} />

      <div className="userCardList">
        <UserCard
          currentUserId={currentUserId}
          userChats={userInfo?.userInfo.chatIDs}
          activeMessage={activeMessage}
          setActiveMessage={setActiveMessage}
        />
      </div>
    </Wrapper>
  );
};

export default UserList;
