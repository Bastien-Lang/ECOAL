import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { SERVER_HOST, GET_ALL_ARTICLES } from "../config/global_constants.jsx"
import DisplaySingleArticle from "./DisplaySingleArticle.jsx"
// import {useLocation} from "react-router-dom";
import Navbar from './Navbar.jsx'
import SearchBar from "./Searchbar.jsx"

function DisplayAllArticles() {
    const [allArticles, setAllArticles] = useState([])
    const [filterArticles, setFilterArticles] = useState([])
    // const location = useLocation()

    async function getAllArticles() {
        const data = (await axios.get(`${SERVER_HOST}${GET_ALL_ARTICLES}`)).data
        setAllArticles(data)
        setFilterArticles(data)
    }

    useEffect(() => {
        (async () => {
            await getAllArticles()
        })()
    }, [])

    return (
        <div>
            <div className="navbarSearch">
            <SearchBar  articles={allArticles} setFilterArticles={setFilterArticles}/>
            </div>
            
            <Link to="/">Home</Link>

            <button><Link to="/NewArticle/">Create</Link></button>

           
            {filterArticles.map((article, index) => (
                <DisplaySingleArticle key={index} article={article} />
            ))}
        </div>
        
    )
}

export default DisplayAllArticles
