import React, { useState } from "react";
import axios from "axios";
import { SERVER_HOST, SEARCH_ARTICLES } from "../config/global_constants";
import "../css/searchbar.css";

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState("");

    function searchArticles(v) {
        setSearchQuery(v);
        console.log("djfmqjfmq")
        if (v === "") 
            props.setFilterArticles(props.articles);
        else {
            const filteredArticles = props.articles.filter((article) =>  article.title.toLowerCase().includes(v.toLowerCase()))
            console.log(filteredArticles)
            console.log(v.toLowerCase())
            props.setFilterArticles(filteredArticles);
        }
    }

    return (
        <>
            {/* Barre de recherche */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchQuery}
                    onChange={(e) => searchArticles(e.target.value)}
                />
            </div>
            
          
        </>
    );
};

export default SearchBar;
