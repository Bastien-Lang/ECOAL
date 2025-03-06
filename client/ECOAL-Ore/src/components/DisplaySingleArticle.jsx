import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_HOST, GET_SINGLE_ARTICLE } from "../config/global_constants.jsx";
import { useParams, Link } from "react-router-dom";
import "../css/singleArticle.css"

function DisplaySingleArticle() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    async function getArticle() {
        try {
            const response = await axios.get(`${SERVER_HOST}${GET_SINGLE_ARTICLE}${id}`);
            setArticle(response.data);
        } catch (error) {
            console.error("Error fetching article:", error);
        }
    }

    useEffect(() => {
        getArticle();
    }, [id]);

    if (!article) return <div className="container">Loading...</div>;

    return (
        <div className="container">
            <div className="articleContainer">
                <h1 className="articleTitle">{article.title}</h1>

                <div className="articleDetails">
                    <span className="publishDate">
                        {new Date(article.created_at).toLocaleDateString("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                </div>

                {article.mediaURL && (
                    <div className="mediaContainer">
                        <img
                            src={article.mediaURL}
                            alt={article.title}
                            className="articleMedia"
                        />
                    </div>
                )}

                <div className="articleContent">
                    <p>{article.content}</p>
                </div>
            </div>
        </div>
    );
}

export default DisplaySingleArticle;
