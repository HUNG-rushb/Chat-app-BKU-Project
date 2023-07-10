import React from 'react'

const UserMessage = ({item}) => {
  return (
    <div className='user-message'><span id='custom-message'>{item.message}</span></div>
  )
}

export default UserMessage;