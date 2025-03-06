import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { SERVER_HOST, GET_ALL_ARTICLES } from "../config/global_constants.jsx"
import DisplaySingleArticle from "./DisplaySingleArticle.jsx"
import "../css/articleCards.css"
// import {useLocation} from "react-router-dom";
import Navbar from './Navbar.jsx'
import SearchBar from "./Searchbar.jsx"

function DisplayAllArticles() {
    const [allArticles, setAllArticles] = useState([])
    const [filterArticles, setFilterArticles] = useState([])
    // const location = useLocation()
    function shortenText(text, length) {
        return text.length > length ? text.slice(0, length) + "…" : text;
    }
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
        <div className="container">
            <div className="headerControls">
                <Link to="/NewArticle/" className="createButton">Create New Article</Link>
            </div>
            <div className="navbarSearch">
            <SearchBar  articles={allArticles} setFilterArticles={setFilterArticles}/>
            </div>
            
            <div className="articlesBox">
                {filterArticles.map((article, index) => (
                    <Link to={`/Articles/${article.id}`} key={index} className="articleLink">
                        <div className="articleCard">
                            <div className="cardImgHolder">
                                <img src={article.mediaURL} alt="Article visual content"/>
                            </div>

                            <div className="articleDetails">
                                <h3 className="articleTitle">{article.title}</h3>
                                <span className="articleTime">
                                    {new Date(article.created_at).toLocaleDateString("en-GB", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                                <p className="articlePreview">
                                    {shortenText(article.content, 10)}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DisplayAllArticles
