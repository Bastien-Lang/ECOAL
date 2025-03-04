import React, { useState, useEffect } from "react"
import axios from "axios"
import {SERVER_HOST} from "../config/global_constants.jsx"

function DisplayAllArticles() {
    const [allArticles, setAllArticles] = useState([])

    async function getAllArticles() {
        const data = (await axios.get(`${SERVER_HOST}/api/articles`)).data
        setAllArticles(data)
    }

    useEffect(() => {
        (async () => {
            await getAllArticles()
        })()
    }, [])

    return (
        <div>
            {allArticles.map((article, index) => (
                <div key={index}>
                    <h2>{article.title}</h2>
                    {article.content}
                    <p>{article.created_at}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayAllArticles
