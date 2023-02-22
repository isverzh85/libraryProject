import Home from './Layout/SidePanel/Nav/Nav';
import Button from './components/Buttons/index';
import MyBookList from './components/Buttons/MyBookList/MyBookList';
import './Layout/SidePanel/Nav/styles.module.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet"/>
         <Home />
         <Button />
         <MyBookList />
      </header>
    </div>
  );
}

export default App;
