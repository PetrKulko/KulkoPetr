import React from 'react';
import './../css/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="menu">
                            <ul>
                                <li> <a href="/">Home</a></li>
                                <li> <a href="#">About</a></li>
                                <li> <a href="#">News</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;