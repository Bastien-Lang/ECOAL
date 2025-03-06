import React, { useState } from "react";
import axios from "axios";
import { SERVER_HOST, GET_ALL_ARTICLES } from "../config/global_constants.jsx";
import { useNavigate } from "react-router-dom";
import "../css/createArticle.css";

function CreateArticle() {
    const navigate = useNavigate()
    const [articleData, setArticleData] = useState({
        title: "",
        content: "",
        mediaType: "",
        thumbnailURL: "",
        mediaURL: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setArticleData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append("title", articleData.title)
        formData.append("content", articleData.content)
        formData.append("mediaType", articleData.mediaType)
        formData.append("thumbnailURL", articleData.thumbnailURL)
        formData.append("mediaURL", articleData.mediaURL)

        try {
            const response = await axios.post(`${SERVER_HOST}${GET_ALL_ARTICLES}`, formData)
            console.log("Article created:", response.data);
            // Reset form
            setArticleData({ title: "", content: "", mediaType: "" , mediaURL: "", thumbnailURL: ""});
            navigate('/Articles')
        } catch (error) {
            console.error("Error creating article:", error);
        }
    };

    return (
        <div className="create-article">
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter article title"
                        value={articleData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    
                    <textarea
                        name="content"
                        placeholder="Enter article content"
                        value={articleData.content}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    
                    <select
                        name="mediaType"
                        placeholder="Select media type"
                        value={articleData.mediaType}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select media type</option>
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                    </select>
                </div>

                <div>
                    
                    <input
                        type="text"
                        name="thumbnailURL"
                        placeholder="Enter thumbnail URL"
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    
                    <input
                        type="text"
                        name="mediaURL"
                        placeholder="Enter media URL"
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    
                    <input
                        type="text"
                        name="tags"
                        placeholder="Enter tags"
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button type="submit">Create Article</button>
            </form>
        </div>
    );
}

export default CreateArticle;
