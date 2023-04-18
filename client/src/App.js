import ChatApp from './components/ChatApp/ChatApp.jsx';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    // <ThemeProvider
    //   breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    //   minBreakpoint="xxs"
    //   // theme={}
    // >
    <ChatApp />
    // </ThemeProvider>
  );
};

export default App;
