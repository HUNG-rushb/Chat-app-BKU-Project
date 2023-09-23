import UserList from '../UserList/UserList.jsx';
import BoxChat from '../BoxChat/BoxChat.jsx';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { messageData } from '../../contants/resource.jsx';

const Wrapper = styled.div`
  /* width: 75%; */
  padding: 5vh 2.5vw 0 2.5vw;
  min-height: 85vh;
`;

const StyledCol = styled(Col)`
  margin: 0;
`;

const ChatApp = () => {
  const [activeMessage, setActiveMessage] = useState(messageData[0].id);

  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <StyledCol sm={3}>
            <UserList
              userListMessage={messageData}
              activeMessage={activeMessage}
              setActiveMessage={setActiveMessage}
            />
          </StyledCol>
          <StyledCol sm={9}>
            {messageData.map((item) => {
              if (item.id === activeMessage) {
                return <BoxChat key={item.id} item={item} />;
              }
            })}
          </StyledCol>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ChatApp;
