import React, { useState, useEffect } from "react"
import axios from "axios"
import {SERVER_HOST} from "../config/global_constants.jsx";

function DisplayAllArticles(){
    const [article, setArticle] = useState([])

    async function getArticle(){
        const data = await axios.get(SERVER_HOST + "/api/articles")
        setArticle(data)
    }

    useEffect(()=>{
        (async () => {
            await getArticle()
        })()
    }, [])

    return (
<></>
    )
}

export default DisplayAllArticles;
