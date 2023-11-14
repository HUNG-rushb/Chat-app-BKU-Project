import { gql } from '@apollo/client';

export const CREATE_CHAT = gql`
  mutation CreateChat($createChatData: CreateChatInput!) {
    createChat(data: $createChatData) {
      id
      userIDs {
        name
        id
      }
    }
  }
`;

export const GET_USER_CHAT = gql`
  mutation CreateChat($createChatData: CreateChatInput!) {
    createChat(data: $createChatData) {
      id
      userIDs {
        name
        id
      }
    }
  }
`;
