import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { Route,Routes } from 'react-router-dom';
import { routes } from './routes';
import GameListing from './Components/Game/GameListing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.login} element={<Login/>}/>
        <Route path ={routes.gameCart} element={<GameListing/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
