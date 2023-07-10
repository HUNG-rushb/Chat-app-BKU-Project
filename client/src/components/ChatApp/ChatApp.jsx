import UserList from '../UserList/UserList.jsx';
import BoxChat from '../BoxChat/BoxChat.jsx';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const Wrapper = styled.div`
  /* width: 75%; */
  padding: 5vh 2.5vw 0 2.5vw;
  min-height: 85vh;
`;

const StyledCol = styled(Col)`
  margin: 0;
`;

const userListMessage = [
  {
    id: 1,
    name: 'User 0',
    image:
      'https://images.pexels.com/photos/17481292/pexels-photo-17481292.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    time: '1 day ago',
    messages: [
      {
        userId: 1,
        message: 'Hello',
      },
      {
        userId: 2,
        message: 'Hi',
      },
      {
        userId: 2,
        message: 'How are you?',
      },
      {
        userId: 1,
        message: 'Im fine, thank you.',
      },
      {
        userId: 1,
        message: 'And you?',
      },
    ],
  },
  {
    id: 2,
    name: 'User 1',
    image:
      'https://images.pexels.com/photos/5257587/pexels-photo-5257587.jpeg?auto=compress&cs=tinysrgb&w=600',
    time: '1 day ago',
    messages: [
      {
        userId: 2,
        message: 'Hello',
      },
      {
        userId: 1,
        message: 'Hi',
      },
      {
        userId: 1,
        message: 'How are you?',
      },
      {
        userId: 2,
        message: 'Im fine, thank you.',
      },
      {
        userId: 2,
        message: 'And you?',
      },
    ],
  },
  {
    id: 3,
    name: 'User 2',
    image:
      'https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=600',
    time: '1 day ago',
    messages: [
      {
        userId: 1,
        message: 'Hi',
      },
      {
        userId: 2,
        message: 'Hello. this is something in the test for the message with too long in length.',
      },
    ],
  },
  {
    id: 4,
    name: 'User 3',
    image:
      'https://images.pexels.com/photos/3104709/pexels-photo-3104709.jpeg?auto=compress&cs=tinysrgb&w=600',
    time: '1 day ago',
    messages: [
      {
        userId: 1,
        message: 'Hello',
      },
      {
        userId: 2,
        message: 'Hello.',
      },
      {
        userId: 2,
        message: 'Can i help you?',
      },
     
    ],
  },
  {
    id: 5,
    name: 'User 4',
    image:
      'https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg?auto=compress&cs=tinysrgb&w=600',
    time: '1 day ago',
    messages: [
      {
        userId: 1,
        message: 'Say something with your new friend',
      },
      {
        userId: 2,
        message: 'Hello. My name is something',
      },
      {
        userId: 2,
        message: 'Where do you live?',
      },
      {
        userId: 1,
        message: 'Im fine, thank you.',
      },
      {
        userId: 1,
        message: 'And you?',
      },
    ],
  },
  {
    id: 6,
    name: 'User 5',
    image:
      'https://images.pexels.com/photos/5122188/pexels-photo-5122188.jpeg?auto=compress&cs=tinysrgb&w=600',
    time: '1 day ago',
    messages: [
      {
        userId: 1,
        message: 'Hello',
      },
    ],
  },
  {
    id: 7,
    name: 'User 6',
    image:
      'https://images.pexels.com/photos/5255202/pexels-photo-5255202.jpeg?auto=compress&cs=tinysrgb&w=600',
    time: '1 day ago',
    messages: [
      {
        userId: 1,
        message: 'Hello',
      },
      {
        userId: 2,
        message: 'Hello',
      },
    ]
  },
  {
    id: 8,
    name: 'User 7',
    image:
      'https://images.pexels.com/photos/5122188/pexels-photo-5122188.jpeg?auto=compress&cs=tinysrgb&w=600',
    time: '1 day ago',
    messages: [
      {
        userId: 1,
        message: 'Hello',
      },
      {
        userId: 2,
        message: 'Hi',
      },
      {
        userId: 2,
        message: 'How are you?',
      },
      {
        userId: 1,
        message: 'Im fine, thank you.',
      },
      {
        userId: 1,
        message: 'And you?',
      },
    ],
  },
  {
    id: 9,
    name: 'User 8',
    image:
      'https://images.pexels.com/photos/5255202/pexels-photo-5255202.jpeg?auto=compress&cs=tinysrgb&w=600',
    time: '1 day ago',
    messages: [
      {
        userId: 1,
        message: 'Hello',
      },
      {
        userId: 2,
        message: 'Hi',
      },
      {
        userId: 2,
        message: 'How are you?',
      },
      {
        userId: 1,
        message: 'Im fine, thank you.',
      },
      {
        userId: 1,
        message: 'And you?',
      },
    ],
  },
];

const ChatApp = () => {
  const [activeMessage, setActiveMessage] = useState(userListMessage[0].id);

  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <StyledCol sm={3}>
            <UserList
              userListMessage={userListMessage}
              activeMessage={activeMessage}
              setActiveMessage={setActiveMessage}
            />
          </StyledCol>
          <StyledCol sm={9}>
            {userListMessage.map((item) => {
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
