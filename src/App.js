import Home from './Layout/SidePanel/Nav/Nav';
import Button from './components/Buttons/index';
import './Layout/SidePanel/Nav/styles.module.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Home />
         <Button />
      </header>
    </div>
  
  );
}

export default App;
