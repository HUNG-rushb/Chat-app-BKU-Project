import React from 'react';
import UserCard from './UserCard.jsx';
import UserListHeader from './UserListHeader.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(45deg, #ffdab9, #fff);
  border-radius: 5px;
`;

const UserList = ({
  currentUserId,
  userInfo,
  userChats,
  activeMessage,
  setActiveMessage,
}) => {
  return (
    <Wrapper>
      <UserListHeader userInfo={userInfo?.userInfo} />

      <div className="userCardList">
        <UserCard
          currentUserId={currentUserId}
          userChats={userChats}
          activeMessage={activeMessage}
          setActiveMessage={setActiveMessage}
        />
      </div>
    </Wrapper>
  );
};

export default UserList;
