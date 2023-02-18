import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { Route,Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.login} element={<Login/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
