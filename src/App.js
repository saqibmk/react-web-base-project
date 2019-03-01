import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import './App.css';

// Configure your Apollo Client https://www.apollographql.com/docs/react/essentials/get-started.html#configuration
const client = new ApolloClient({
  uri: ''
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
