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
