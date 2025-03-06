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
                                    {article.content?.slice(0, 100) + (article.content?.length > 100 ? "..." : "")}
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
