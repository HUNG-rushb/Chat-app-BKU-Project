import React from 'react';
import './UserList.css';

const UserListHeader = () => {
  return (
    <div className="user-list-header-container">
      <img
        id="user-list-header-avatar"
        src="https://images.pexels.com/photos/3090875/pexels-photo-3090875.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className='user-list-header-title'>
        <span id='chats-title'>Flens Chats</span>
      </div>
    </div>
  );
};

export default UserListHeader;
