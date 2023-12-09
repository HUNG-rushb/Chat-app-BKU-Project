import ChatApp from './pages/ChatApp.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const App = ({
  userId = '',
  anotherUser = { anotherUser: '', isNewChat: false },
}) => {
  console.log({ anotherUser }, 'in chat App 1');

  // return <ChatApp userId={userId} anotherUser={anotherUser} />;

  return (
    <ChatApp
      userId={'6496c0da518d8caaf82fcac3'}
      // anotherUser={{ anotherUser: '653e0fe9048b56b72b30a615', isNewChat: true }}
      anotherUser={{ anotherUser: '', isNewChat: false }}
    />
  );
};

export default App;
