import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <div className="head">
                <h1>My Freelancers Team</h1>
                <h3>Total Budget: $ 100 Million</h3>
                <div className="search">
                    <input type="text" placeholder="Search Name" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;