import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className="jumbotron">
        <h1>Poker</h1>
        <p>Let's gamble away, fellas!</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;