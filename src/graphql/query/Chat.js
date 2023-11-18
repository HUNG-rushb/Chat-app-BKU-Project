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

export const UPDATE_CHAT_SUB = gql`
  subscription UpdateStatusChat($userId: String) {
    updateStatusChat(userId: $userId) {
      id
      lastMessageAt
      userIDs {
        name
      }
    }
  }
`;
