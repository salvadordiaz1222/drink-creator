import React from "react";
import reactDom from "react-dom";

import { ApolloProvider, ApolloClient, inMemoryCache } from "apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new inMemoryCache(),
});

return (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
