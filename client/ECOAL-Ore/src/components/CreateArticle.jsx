import React, { useState } from "react";
import axios from "axios";
import { SERVER_HOST, ARTICLES } from "../config/global_constants.jsx";

function CreateArticle() {
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

        // console.log({
        //     "SUBMIT": `${SERVER_HOST}${ARTICLES}`
        // })

        const formData = new FormData()
        formData.append("title", articleData.title)
        formData.append("content1", articleData.content)
        formData.append("mediaType", articleData.mediaType)
        formData.append("thumbnailURL", articleData.thumbnailURL)
        formData.append("mediaURL", articleData.mediaURL)

        try {
            const response = await axios.post(`${SERVER_HOST}${ARTICLES}`, formData)
            console.log("Article created:", response.data);
            // Reset form
            setArticleData({ title: "", content: "", mediaType: "" , mediaURL: "", thumbnailURL: ""});
        } catch (error) {
            console.error("Error creating article:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={articleData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={articleData.content}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label>Media Type:</label>
                    <select
                        name="mediaType"
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
                    <label>Thumbnail (Cover):</label>
                    <input
                        type="text"
                        name="thumbnailURL"
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label>Media File:</label>
                    <input
                        type="text"
                        name="mediaURL"
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
