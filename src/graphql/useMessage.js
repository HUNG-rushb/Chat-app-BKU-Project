import {
  CREATE_MESSAGE,
  GET_ALL_CHAT_MESSAGE,
  CREATED_MESSAGE_SUB,
} from './query/Message.js';
import { useQuery, useMutation, useSubscription } from '@apollo/client';
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

  useSubscription(CREATED_MESSAGE_SUB, {
    variables: { chatId: chatId },
    onData: ({ data }) => {
      // console.log(data);
      refetch();
    },
  });

  const loadNew = useCallback(async () => {
    await fetchMore({
      variables: {
        after: data.getChatMessage.pageInfo.endCursor,
      },
    });
    // console.log({ a });
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

export const useCreateMessage = () => {
  const [createMessage, { data, loading, error }] = useMutation(
    CREATE_MESSAGE,
    {
      fetchPolicy: 'no-cache',
    },
  );

  return {
    createMessage,
    isFetching: loading,
    fetchedData: data,
    fetchError: error,
  };
};
