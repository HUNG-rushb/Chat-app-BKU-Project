import { GET_USER_INFO } from './query/User.js';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';

export const useGetUserInfo = (
  queryPayload,
  setActiveMessage = () => {},
  setMessageData = () => {},
) => {
  const { data, loading, error } = useQuery(GET_USER_INFO, {
    variables: queryPayload,
    onCompleted: (data) => {
      //   console.log(data);
      setActiveMessage(data.userInfo.chatIDs[0].id);
      //   setMessageData()
    },
  });

  return {
    isFetching: loading,
    fetchedData: data,
    fetchError: error,
  };
};
