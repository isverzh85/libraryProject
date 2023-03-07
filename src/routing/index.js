import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyBookList from '../components/Buttons/MyBookList/MyBookList';
import Nav from '../Layout/SidePanel/Nav/Nav';

function Routes() {
  return (
    <Router>
        <div>
          <Switch>
             <Route path="/my-book-list">
               <MyBookList />
             </Route>
             <Route path="/">
             <Nav key = "nav" />
            </Route>  
          </Switch>
        </div>
    </Router>
  );
}

export default Routes;
