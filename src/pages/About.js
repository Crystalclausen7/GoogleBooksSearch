import React from "react";
import "./about.css";
 
function About() {
    return (
        <div>
            <nav className="open">GoogleBooks<a className="navstyle" href="/SavedBooks">Saved</a> <a className="navstyle" href="/SearchBooks">Search</a> </nav>
        </div>
    );
}

export default About;