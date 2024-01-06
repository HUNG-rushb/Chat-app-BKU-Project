import React from 'react';
import './UserList.css';

const UserListHeader = ({ userInfo }) => {
  return (
    <div className="user-list-header-container">
      <img
        id="user-list-header-avatar"
        src={userInfo?.profileImageURL}
        alt=""
      />
      <div className="user-list-header-title">
        <span id="chats-title">{String(userInfo?.name).toUpperCase()}</span>
      </div>
    </div>
  );
};

export default UserListHeader;
