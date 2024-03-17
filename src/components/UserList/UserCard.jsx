import React, { useCallback } from 'react';
import styled from 'styled-components';
import './UserList.css';
import _ from 'lodash';

const UserCard = ({
  currentUserId,
  userChats = [],
  activeMessage,
  setActiveMessage,
}) => {
  // console.log({ userChats });
  // console.log({ newChatUserInfo }, 'in user card');

  userChats = userChats.map((chat) => ({
    id: chat.id,
    userIDs: _.filter(chat.userIDs, (user) => {
      return user.id !== currentUserId;
    }),
  }));

  // console.log({ userChats }, 'filtered');

  const handleClickChooseMessage = useCallback(
    (id) => {
      setActiveMessage(id);
    },
    [setActiveMessage],
  );

  return (
    <>
      {userChats.map((item) => (
        <div
          className={
            item.id === activeMessage
              ? 'user-card-container-active'
              : 'user-card-container-inActive'
          }
          key={item.id}
          onClick={() => handleClickChooseMessage(item.id)}
        >
          <img
            id="user-cart-avatar"
            src={item.userIDs[0].profileImageURL}
            alt=""
          />
          <div className="name-and-time">
            <span id="user-card-name">{item.userIDs[0].name}</span>
            {/* <span id="user-card-time">{item.time}</span> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCard;
