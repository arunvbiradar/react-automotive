import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="bg-dark content text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="/">Automotive</Link>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptas, commodi minus minima beatae modi, sequi quae ad aut dolor rerum reprehenderit in quasi placeat nam alias rem molestias doloribus?</p>
                        </div>
                        <div className="col-md-3">
                            <h6>Heading</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Heading</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Heading</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                                <li><Link to="/">Link</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                &copy; Copyright 2019.
            </div>
        </footer>
    )
}
