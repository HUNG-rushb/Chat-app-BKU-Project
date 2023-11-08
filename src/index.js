import React from 'react';
import ReactDOM from 'react-dom/client';
import '@babel/polyfill';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities/policies/pagination.js';

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // getNewFeed: relayStylePagination(),
          // getAllUserPosts: relayStylePagination(),
        },
      },
    },
  }),
  // !This is live hosted server
  // uri: 'https://social-image-api.link',
  // ! This is a local server
  // ! Use this URL when developing
  uri: 'http://localhost:4000/dev/',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
