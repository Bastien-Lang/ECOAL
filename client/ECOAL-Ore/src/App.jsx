import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import DisplayAllArticles from './components/DisplayAllArticles.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
    return (
        <>
<Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles/*" element={<DisplayAllArticles />} />
                <Route path="/test" element={<h2>test</h2>} />

                {/* Add these routes if you plan to create these components */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/articles/:articleId" element={<ArticleDetail />} /> */}

                {/* Optional: Add a 404 catch-all route */}
                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
        </>
    )
}

export default App
