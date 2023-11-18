import React from 'react';
import ReactDOM from 'react-dom/client';
import '@babel/polyfill';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
} from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities/policies/pagination.js';
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:4000',
    // connectionParams: async () => ({
    //   test: 'test',
    // }),
  }),
);

const httpLink = new HttpLink({
  uri: `http://localhost:4000/dev`,
});

const link =
  typeof window !== 'undefined' && wsLink != null
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query);
          return (
            def.kind === 'OperationDefinition' &&
            def.operation === 'subscription'
          );
        },
        wsLink,
        httpLink,
      )
    : httpLink;

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getChatMessage: relayStylePagination(),
        },
      },
    },
  }),
  // !This is live hosted server
  // uri: 'https://social-image-api.link',
  // ! This is a local server
  // ! Use this URL when developing
  // uri: 'http://localhost:4000/dev/',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
