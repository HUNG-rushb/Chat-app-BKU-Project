import React from 'react';
import unixToDateTime from './unixToDateTime';

const UserMessage = ({ item }) => {
  return (
    <div className="user-message">
      <span id="custom-message">
        {item.isImage ? (
          <img src={item.message} style={{ maxWidth: 100 }} alt="" />
        ) : (
          item.message
        )}
      </span>
      {unixToDateTime(item.createdAt)}
    </div>
  );
};

export default UserMessage;
