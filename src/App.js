import React, { useContext }  from 'react'
import './App.css';

import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';

import { LoginContext } from './components/login_context/LoginContext'

function App() {

  const {userLogin} = useContext(LoginContext)

  return (
    <div className="App">
      {
        userLogin ?  (       
                        <>
                            <Sidebar />
                            <Dashboard />
                        </>
                      )

                  :   (<Login />)
                      
      } 
    </div>
  );
}

export default App;


