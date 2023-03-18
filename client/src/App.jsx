import { Routes,Route,Navigate } from 'react-router-dom'
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import Sidebar from './components/Sidebar/Sidebar';
import Records from './pages/Records/Records';
import Scan from './pages/Scan/Scan';

function App() {

  const {currentUser} = useContext(AuthContext);

  const [showSidebar,setShowSidebar] = useState(true);

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login"/>
  }

  return (
    <div className='app'>
      {showSidebar && <Sidebar/>}
      <Routes>
        <Route path="/login" element={<Login setShowSidebar={setShowSidebar}/>}/>
        <Route path="/" element={<RequireAuth><Dashboard setShowSidebar={setShowSidebar}/></RequireAuth>}/>
        <Route path="/records" element={<RequireAuth><Records setShowSidebar={setShowSidebar}/></RequireAuth>}/>
        <Route path="/scan" element={<RequireAuth><Scan setShowSidebar={setShowSidebar}/></RequireAuth>}/>
      </Routes>
    </div>
  )
}

export default App
