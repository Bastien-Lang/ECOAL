import { Routes, Route, useLocation } from 'react-router-dom'
import './css/App.css'

import DisplayAllArticles from './components/DisplayAllArticles.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import SingUp from './components/SingUp.jsx'

function App() {
  const location = useLocation();
  const hideNavbarOnRoutes = ['/SingUp', '/test']; 
  return (
      <>
          {!hideNavbarOnRoutes.includes(location.pathname) && <Navbar />} 
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Articals/" element={<DisplayAllArticles />} />
              <Route path="/test" element={<h2>test</h2>} />
              <Route path="/SingUp" element={<SingUp />} />
          </Routes>
      </>
  )
}

export default App;
