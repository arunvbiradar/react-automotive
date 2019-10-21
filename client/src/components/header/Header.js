import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="" className="navbar-brand">Automotive</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" arai-label="toggle-navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item"><Link to="" className="nav-link">Cars</Link></li>
                        <li className="nav-item"><Link to="/bikes" className="nav-link">Bikes</Link></li>
                        <li className="nav-item"><Link to="/brands" className="nav-link">Brands</Link></li>
                        <li className="nav-item"><Link to="/tools" className="nav-link">Tools</Link></li>
                        <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
