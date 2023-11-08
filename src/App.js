import ChatApp from './components/ChatApp/ChatApp.jsx';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ userId }) => {
  return <ChatApp userId={userId} />;
};

export default App;
