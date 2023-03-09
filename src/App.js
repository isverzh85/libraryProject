import React from 'react';
import Routing from './routing/index';
import './Pages/SidePanel/Nav/styles.module.scss';
//import {BookListContext} from './context/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>
          <Routing/>
      </header>
    </div>
  );
}

export default App;
