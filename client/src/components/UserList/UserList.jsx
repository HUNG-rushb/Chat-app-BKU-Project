import React from 'react';
import UserCard from './UserCard.jsx';
import UserListHeader from './UserListHeader.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* width: 75%; */
  margin: 5vh 2.5vw 0 2.5vw;
  min-height: 85vh;
`;

const UserList = () => {
  return (
    <>
      <UserListHeader />

      <div>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
};

export default UserList;
