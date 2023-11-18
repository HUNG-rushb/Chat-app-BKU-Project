import { CREATE_CHAT } from './query/Chat.js';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import _ from 'lodash';

export const useCreateChat = (cache) => {
  const [createChat, { data, loading, error }] = useMutation(CREATE_CHAT);

  return {
    createChat,
    isFetching: loading,
    fetchedData: data,
    fetchError: error,
  };
};
