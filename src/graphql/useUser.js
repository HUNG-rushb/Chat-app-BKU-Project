import { GET_USER_INFO, GET_NEW_CHAT_USER_INFO } from './query/User.js';
import { UPDATE_CHAT_SUB } from './query/Chat.js';
import {
  useQuery,
  useLazyQuery,
  useMutation,
  useSubscription,
} from '@apollo/client';

export const useGetUserInfo = (
  queryPayload,
  setActiveMessage = () => {},
  anotherUserCurrent,
) => {
  const { data, loading, error, refetch } = useQuery(GET_USER_INFO, {
    variables: queryPayload,
    onCompleted: (data) => {
      // console.log(data, 'get user chat hook');
      if (anotherUserCurrent?.isNewChat) setActiveMessage('new');
      else setActiveMessage(data.userInfo.chatIDs[0].id);
    },
  });

  useSubscription(UPDATE_CHAT_SUB, {
    variables: { userId: queryPayload.userInfoData.userId },
    onData: ({ data }) => {
      // console.log(data);
      refetch();
    },
  });

  return {
    isFetching: loading,
    fetchedData: data,
    fetchError: error,
  };
};

export const useGetNewChatUserInfo = (
  queryPayload,
  setActiveMessage = () => {},
) => {
  const { data, loading, error, refetch } = useQuery(GET_NEW_CHAT_USER_INFO, {
    variables: queryPayload,
    onCompleted: (data) => {
      //   console.log(data);
      // setActiveMessage(data.userInfo.chatIDs[0].id);
    },
  });

  return {
    isFetching: loading,
    fetchedData: data,
    fetchError: error,
  };
};
