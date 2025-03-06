import { Routes, Route, Link } from 'react-router-dom'

import './css/App.css'

import DisplayAllArticles from './components/DisplayAllArticles.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'


function App() {

  return (
      <>
          <Navbar />
          <Routes>
              <Route path="/" element=<Home/>/>
              <Route path="/Articals/" element=<DisplayAllArticles />/>
              <Route path="/test" element= {<h2>test</h2>}/>
              
          </Routes>
      </>
  )
}

export default App
