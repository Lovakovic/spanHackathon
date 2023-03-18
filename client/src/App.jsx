import { Routes,Route,Navigate } from 'react-router-dom'
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login"/>
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<RequireAuth><Dashboard/></RequireAuth>}/>
      </Routes>
    </>
  )
}

export default App
