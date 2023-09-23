import React, { useCallback } from 'react';
import styled from 'styled-components';
import './UserList.css';

const UserCard = ({ userListMessage, activeMessage, setActiveMessage }) => {
  const handleClickChooseMessage = useCallback((id) => {
    setActiveMessage(id);
  },[setActiveMessage]);
  return (
    <>
      {userListMessage.map((item) => (
        <div
          className={
            item.id === activeMessage
              ? 'user-card-container-active'
              : 'user-card-container-inActive'
          }
          key={item.id}
          onClick={() => handleClickChooseMessage(item.id)}
        >
          <img id="user-cart-avatar" src={item.image} alt="" />
          <div className="name-and-time">
            <span id="user-card-name">{item.name}</span>
            <span id="user-card-time">{item.time}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCard;
