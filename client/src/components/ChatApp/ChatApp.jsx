import UserList from '../UserList/UserList.jsx';
import BoxChat from '../BoxChat/BoxChat.jsx';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Wrapper = styled.div`
  /* width: 75%; */
  margin: 5vh 2.5vw 0 2.5vw;
  min-height: 85vh;
`;

const StyledCol = styled(Col)`
  margin: 0;
`;

const ChatApp = () => {
  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <StyledCol sm={3}>
            <UserList />
          </StyledCol>

          <StyledCol sm={9}>
            <BoxChat />
          </StyledCol>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ChatApp;
