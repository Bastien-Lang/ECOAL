import React from "react"
import { Link } from "react-router-dom"

function Home() {

    return (
        <>
            <Link to="/Articles/">Articles</Link>

            <h2>This is Home Page</h2>
        </>
    )
}


export default Home
