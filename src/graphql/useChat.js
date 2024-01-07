import { CREATE_CHAT } from './query/Chat.js';
import { useMutation } from '@apollo/client';

export const useCreateChat = (cache) => {
  const [createChat, { data, loading, error }] = useMutation(CREATE_CHAT);

  return {
    createChat,
    isFetching: loading,
    fetchedData: data,
    fetchError: error,
  };
};
