import { gql } from '@apollo/client';

export const GET_USER_INFO = gql`
  query UserInfo($userInfoData: UserInfoInput!) {
    userInfo(data: $userInfoData) {
      id
      profileImageURL
      name

      chatIDs {
        id
        userIDs {
          name
          profileImageURL
          id
        }
      }
    }
  }
`;

export const GET_NEW_CHAT_USER_INFO = gql`
  query UserInfo($userInfoData: UserInfoInput!) {
    userInfo(data: $userInfoData) {
      id
      profileImageURL
      name
    }
  }
`;
