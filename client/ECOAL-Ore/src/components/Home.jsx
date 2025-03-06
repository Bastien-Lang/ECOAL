import React from "react";
import { Link } from "react-router-dom";
//import Navbar from './Navbar';
import '../css/home.css';
//import  "../esportsWorldCupImage.jpeg";

function Home() {
    return (
        <div className="home_page">


            <header>
                <h1>Welcome to E-EXP</h1>
                
            </header>

            <div className="section recent-news">
                <h2>Recent News</h2>
                
                <ul>
                    <li>
                        <h3>Team XYZ Wins International Championship</h3>
                        <p>Team XYZ has claimed victory at the International Esports Championship, securing a $1 million prize.</p>
                        <Link to="/Articles/team-xyz-wins">Read More</Link>
                    </li>
                    <li>
                        <h3>New Game Announcement: "Battle Nexus"</h3>
                        <p>The highly anticipated game "Battle Nexus" has been announced, set to release in Q4 2023.</p>
                        <Link to="/Articles/battle-nexus-announcement">Read More</Link>
                    </li>
                </ul>
            </div>

            <div className="section featured-articles">
                <h2>Featured Articles</h2>
                <div className="article-grid">
                    <div className="article-card">
                        <h3>Top 5 Esports Players of 2023</h3>
                        <p>Discover the top 5 esports players who dominated the scene in 2023.</p>
                        <Link to="/Articles/top-5-players-2023">Read More</Link>
                    </div>
                    <div className="article-card">
                        <h3>Getting Started in Competitive Gaming</h3>
                        <p>A beginner's guide to breaking into the world of competitive gaming.</p>
                        <Link to="/Articles/get-started-esports">Read More</Link>
                    </div>
                </div>
            </div>

            <div className="section upcoming-events">
                <h2>Upcoming Events</h2>
                <div className="event-list">
                    <div className="event-item">


                        <h3>Esports World Cup 2023</h3>
                        <p>November 15-20, 2023 • Los Angeles, USA</p>
                        <Link to="/Articles/esports-world-cup-2023">Event Details</Link>
                    </div>
                    <div className="event-item">


                        <h3>Global Gaming Expo</h3>
                        <p>December 5-7, 2023 • Berlin, Germany</p>
                        <Link to="/Articles/global-gaming-expo-2023">Event Details</Link>
                    </div>
                </div>
            </div>

            <footer>
                <p>Stay connected with us for more updates!</p>
                <Link to="/articles/" className="footer-link">Browse All Articles</Link>
            </footer>
        </div>
    );
}

export default Home;
