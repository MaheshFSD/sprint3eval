import './App.css';
import React from "react"
import {AuthContext} from './Context/AuthContext';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Routes from './Routes/Routes';

function App() {
  
  const {isAuth,handleLogout}=React.useContext(AuthContext)
  return (
    <div className="App">
        {isAuth? 
        <div>
          <Navbar />
          <button onClick={handleLogout} >Logout</button><br></br>
          <Routes />
        </div>:<Login />}
    </div>
  );
}

export default App;
