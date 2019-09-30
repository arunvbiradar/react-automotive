import React from 'react'
import BlogItem from './Item'
import './Blog.scss'
import Title from '../common/Title'

export default function Blog() {
    return (
        <React.Fragment>
            <section className="hero">
                <div className="container">
                    <div className="jumbotron text-center">
                        <h2 className="display-3">Hello, World!</h2>
                        <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className="w-50 d-inline-block">
                            <div className="input-group">
                                <input type="text" className="form-control"/>
                                <div className="input-group-append">
                                    <span className="input-group-text">Search</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="brands bg-light">
                <div className="container">
                    <Title title="Popular Category" />
                    <div className="text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="card">
                                    <img src="/img/80x80/placeholder.jpg" alt="" className="car-img-top"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="blog-list">
                <div className="container">
                    <div className="card-columns">
                        <BlogItem styler="blog-item" />
                        <BlogItem styler="blog-item" />
                        <BlogItem styler="blog-item" />
                        <BlogItem styler="blog-item" />
                        <BlogItem styler="blog-item" />
                        <BlogItem styler="blog-item" />
                        <BlogItem styler="blog-item" />
                        <BlogItem styler="blog-item" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
