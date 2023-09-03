import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { Route,Routes } from 'react-router-dom';
import { routes } from './routes';
import GameListing from './Components/Game/GameListing';
import LoggedIn from './Components/Game/LoggedIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.login} element={<Login/>}/>
        <Route path ={routes.loggedIn} element={<LoggedIn/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
