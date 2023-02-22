import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TheBookList from './TheBookList';
import Nav from '../Layout/SidePanel/Nav/Nav';

function App() {
    return (
       <BrowserRouter>
        <Switch>
           <Route path="/my-book-list" />
           <TheBookList/>
             
           <Route path="/"  />
           <Nav/>
             
           
        </Switch>
       </BrowserRouter>
 
  );
}

export default App;