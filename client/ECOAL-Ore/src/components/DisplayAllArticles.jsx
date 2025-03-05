import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { SERVER_HOST, GET_ALL_ARTICLES } from "../config/global_constants.jsx"
// import {useLocation} from "react-router-dom";

function DisplayAllArticles() {
    const [allArticles, setAllArticles] = useState([])
    // const location = useLocation()

    async function getAllArticles() {
        const data = (await axios.get(`${SERVER_HOST}${GET_ALL_ARTICLES}`)).data
        setAllArticles(data)
    }

    useEffect(() => {
        (async () => {
            await getAllArticles()
        })()
    }, [])

    return (
        <div>
            <Link to="/">Home</Link>

            {allArticles.map((article, index) => (
                <div key={index}>
                    <h2>{article.title}</h2>
                    {article.content}
                    <p>{article.created_at}</p>
                    <img src={article.mediaURL} alt=""/>
                </div>
            ))}
        </div>
    )
}

export default DisplayAllArticles
