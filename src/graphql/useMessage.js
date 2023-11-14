import { CREATE_MESSAGE, GET_ALL_CHAT_MESSAGE } from './query/Message.js';
import { useQuery, useMutation } from '@apollo/client';
import { useCallback } from 'react';

export const useGetAllChatMessage = (chatId) => {
  const { data, loading, error, fetchMore, refetch } = useQuery(
    GET_ALL_CHAT_MESSAGE,
    {
      fetchPolicy: 'network-only',
      variables: {
        chatId,
      },
    },
  );

  const loadNew = useCallback(async () => {
    const a = await fetchMore({
      variables: {
        after: data.getChatMessage.pageInfo.endCursor,
      },
    });
    console.log({ a });
  }, [data]);

  return {
    messages: data?.getChatMessage?.edges ?? [],
    hasNextPage: data?.getChatMessage?.pageInfo?.hasNextPage ?? true,
    isFetching: loading,
    fetchedData: data,
    fetchError: error,
    loadNew,
    refetch,
  };
};
