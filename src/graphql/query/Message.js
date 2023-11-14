import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql`
  mutation CreateReport($createReportData: CreateReportInput!) {
    createReport(data: $createReportData) {
      id
      isFinished
      postId
      reason
      userId
      userReported
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
