import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($createMessageData: CreateMessageInput!) {
    createMessage(data: $createMessageData) {
      chatId {
        id
      }

      userId {
        name
      }

      isImage
      message
      createdAt
    }
  }
`;

export const GET_ALL_CHAT_MESSAGE = gql`
  query GetChatMessage($chatId: String, $after: String) {
    getChatMessage(chatId: $chatId, after: $after) {
      edges {
        cursor
        node {
          id
          message
          isImage
          createdAt
          userId {
            id
            profileImageURL
          }
        }
      }

      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

export const CREATED_MESSAGE_SUB = gql`
  subscription CreatedMessageSubcription($chatId: String) {
    createdMessage(chatId: $chatId) {
      chatId {
        id
      }
      # isImage
      # message
      userId {
        name
      }
      # createdAt
    }
  }
`;
