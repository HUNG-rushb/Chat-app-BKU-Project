import { gql } from '@apollo/client';

export const GET_USER_INFO = gql`
  query UserInfo($userInfoData: UserInfoInput!) {
    userInfo(data: $userInfoData) {
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
