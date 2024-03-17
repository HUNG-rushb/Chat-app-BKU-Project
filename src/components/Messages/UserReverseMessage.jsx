import React from 'react';
import unixToDateTime from './unixToDateTime';

const UserReverseMessage = ({ item }) => {
  return (
    <div className="user-reverse-message">
      {item.isImage ? (
        <img src={item.message} style={{ maxWidth: 100 }} />
      ) : (
        item.message
      )}
      {/* {unixToDateTime(item.createdAt)} */}
    </div>
  );
};

export default UserReverseMessage;
