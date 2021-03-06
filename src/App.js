import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import { SearchBooks, SavedBooks } from "./Books";

function App() {

    return (
        <Router>
            <div>
                <About/>
                <Wrapper>
                    <Route exact path="/" component={SearchBooks} />
                    <Route exact path="/SearchBooks" component={SearchBooks} />
                    <Route exact path="/SavedBooks" componet={SavedBooks} />
                </Wrapper>
            </div>
        </Router>
    );
}


export default App;