import React from "react"
import {useParams} from 'react-router-dom'
import { GET_SINGLE_ARTICLE } from "../config/global_constants"
import axios from "axios"
import { SERVER_HOST } from "../config/global_constants"
import { useEffect, useState } from "react"
import { PacmanLoader } from "react-spinner"


function Article() {
    let params = useParams()
    let id = params.id // Now you can use the id
    const [article, setArticle] = useState(null)
    // const location = useLocation()

    async function getArticle() {
        const data = (await axios.get(`${SERVER_HOST}${GET_SINGLE_ARTICLE}${id}`)).data
        setArticle(data)
    }

    useEffect(() => {
        (async () => {
            await getArticle()
        })()
    }, [])

   function formatDate(dateString)  {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-EN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    };
    
    if(article == null){
        return <h1>Loading...</h1>
        //return <PacmanLoader />
    }

    return (
        <div>
            <h2>{article.title}</h2>
            <span>{article.content}</span>
            <p>Created at :{formatDate(article.created_at)}</p>
            <img src={article.mediaURL} alt=""/>
        </div>
    )
}


export default Article