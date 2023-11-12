import ChatApp from './pages/ChatApp.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const App = ({ userId }) => {
  return <ChatApp userId={userId} />;
};

export default App;
