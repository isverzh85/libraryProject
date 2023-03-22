import React, { useContext, createContext, useState } from 'react';
import Routing from './routing/index';
import './Pages/Home/styles.module.scss';
import './Pages/MyBookList/styles.module.scss';
import { MyAddedBookListContext } from './context/BookList/MyBookListContext';

function App() {
  const [myAddedBookList, setMyAddedBookList] = useState();

  return (
    <div className="App">
      <MyAddedBookListContext.Provider value={{ myAddedBookList: myAddedBookList, changeAddedBookList: setMyAddedBookList }}>
        <Routing/>
      </MyAddedBookListContext.Provider>
    </div>
  );
}

export default App;