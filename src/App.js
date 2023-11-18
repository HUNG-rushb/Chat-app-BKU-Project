import ChatApp from './pages/ChatApp.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const App = ({
  userId = '',
  anotherUser = { anotherUser: '', isNewChat: false },
}) => {
  return <ChatApp userId={userId} anotherUser={anotherUser} />;

  // return (
  //   <ChatApp
  //     userId={'6496c0da518d8caaf82fcac3'}
  //     // anotherUser={{ anotherUser: '653fc769943f19b91c4e966e', isNewChat: true }}
  //     // anotherUser={{ anotherUser: '', isNewChat: false }}
  //   />
  // );
};

export default App;
