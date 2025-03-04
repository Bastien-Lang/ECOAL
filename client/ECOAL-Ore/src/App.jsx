import { Routes, Route, Link } from 'react-router-dom'

import './css/App.css'

import DisplayAllArticles from './components/DisplayAllArticles.jsx'


function App() {

  return (
      <>
          <Routes>
              <Route path="/" element=<DisplayAllArticles/>/>
          </Routes>
      </>
  )
}

export default App
