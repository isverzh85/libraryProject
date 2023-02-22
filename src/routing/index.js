import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyBookList from './MyBookList';

function App() {
    return (
        <Router>
        <Switch>
           <Route path="/my-book-list" component={MyBookList} />
           <Route path="/"  />
        </Switch>
    </Router>
  );
}

export default App;


