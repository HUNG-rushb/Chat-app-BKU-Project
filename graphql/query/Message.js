import { gql } from '@apollo/client';

export const CREATE_REPORT = gql`
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

export const GET_ALL_REPORTS = gql`
  query AllReports {
    allReports {
      id
      isFinished
      postId
      reason
      userId
      userReported
    }
  }
`;

// export const GET_REPORT_INFO = gql`
//   query StoryInfo($storyInfoData: StoryInfoInput!) {
//     storyInfo(data: $storyInfoData) {
//       id
//       comments {
//         userId {
//           name
//           profileImageURL
//         }
//         id
//         content
//         createdAt
//       }
//       content
//       createdAt
//       images
//       points
//       title
//       userLikedStory
//       userId {
//         backgroundImageURL
//         name
//       }
//     }
//   }
// `;

// export const DELETE_STORY = gql`
//   mutation DeleteStory($deleteStoryData: DeleteStoryInput!) {
//     deleteStory(data: $deleteStoryData) {
//       id
//       title
//       userId {
//         name
//       }
//     }
//   }
// `;

// export const INTERACT_STORY = gql`
//   mutation InteractStory($interactStoryData: InteractStoryInput!) {
//     interactStory(data: $interactStoryData) {
//       id
//       points
//       title
//     }
//   }
// `;
