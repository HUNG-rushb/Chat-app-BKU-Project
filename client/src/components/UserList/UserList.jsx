import React from 'react';
import UserCard from './UserCard.jsx';
import UserListHeader from './UserListHeader.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ffdab9;
`;

const UserList = ({ userListMessage, activeMessage, setActiveMessage }) => {
  return (
    <Wrapper>
      <UserListHeader />
      <div className='userCardList'>
        <UserCard
          userListMessage={userListMessage}
          activeMessage={activeMessage}
          setActiveMessage={setActiveMessage}
        />
      </div>
    </Wrapper>
  );
};

export default UserList;
