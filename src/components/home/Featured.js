import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../common/Title';

export default function Featured() {
    return (
        <section className="featured bg-light">
            <div className="container">
                <Title title="Featured Cars" />
                <div className="cards row">
                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img src="/img/300x200/placeholder.jpg" alt="" className="car-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title mb-0">Card title</h5>
                                <h5 className="card-title mb-0">Price here</h5>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                    <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                </ul>
                                <Link to="/" className="btn btn-primary btn-block">Know more details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img src="/img/300x200/placeholder.jpg" alt="" className="car-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title mb-0">Card title</h5>
                                <h5 className="card-title mb-0">Price here</h5>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                    <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                </ul>
                                <Link to="/" className="btn btn-primary btn-block">Know more details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img src="/img/300x200/placeholder.jpg" alt="" className="car-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title mb-0">Card title</h5>
                                <h5 className="card-title mb-0">Price here</h5>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                    <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                </ul>
                                <Link to="/" className="btn btn-primary btn-block">Know more details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img src="/img/300x200/placeholder.jpg" alt="" className="car-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title mb-0">Card title</h5>
                                <h5 className="card-title mb-0">Price here</h5>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                    <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                </ul>
                                <Link to="/" className="btn btn-primary btn-block">Know more details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
