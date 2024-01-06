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
    // url: 'ws://localhost:4000',
    url: 'ws://ec2-47-129-9-77.ap-southeast-1.compute.amazonaws.com/',
  }),
);

const httpLink = new HttpLink({
  // uri: http://localhost:4000/dev,
  uri:  'http://ec2-47-129-9-77.ap-southeast-1.compute.amazonaws.com/',
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
  headers: {
    'Content-Type': 'application/json',
    'apollo-require-preflight': true,
    'Access-Control-Allow-Origin':
      'https://roxqm2ljb8.execute-api.ap-southeast-1.amazonaws.com/',
    'Access-Control-Allow-Credentials': true,
  },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getChatMessage: relayStylePagination(),
        },
      },
    },
  }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
