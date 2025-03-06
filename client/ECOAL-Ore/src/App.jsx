import { Routes, Route, useLocation } from 'react-router-dom'
import './css/App.css'

import DisplayAllArticles from './components/DisplayAllArticles.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Login from "./components/Login"
import SignUp from './components/SignUp' 
import About from "./components/About"


function isAuthenticated() {
  return document.cookie.includes("access_token")
}
function App() {
  const location = useLocation();
  const hideNavbarOnRoutes = ['/Login', '/SignUp']; 
  return (
      <>
          {!hideNavbarOnRoutes.includes(location.pathname) && <Navbar />} 
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Articals/" element={<DisplayAllArticles/>}/>
              <Route path="/Login" element= {<Login />} />
              <Route path="/SignUp" element={<SignUp/>} />
              {isAuthenticated() ? <Route path="/test" element= {<h3>Test</h3>} /> : null}
              <Route path="*" element={<p>Page Not Found</p>} />
              <Route path="/About" element={<About/>} />
          </Routes>
      </>
  )
}

export default App;
