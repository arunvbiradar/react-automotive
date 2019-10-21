import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../common/Title';

export default function CompareList() {
    return (
        <section className="compare-list bg-light">
            <div className="container">
                <Title title="Compare cars" />
                <div className="cards row">
                    <div className="col-sm-6 col-md-6">
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <img src="img/300x200/placeholder.jpg" alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">Card title</h5>
                                        <h5 className="card-title mb-0">Price here</h5>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                            <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src="img/300x200/placeholder.jpg" alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">Card title</h5>
                                        <h5 className="card-title mb-0">Price here</h5>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                            <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Link to="" className="btn btn-primary">Know more details</Link>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <img src="img/300x200/placeholder.jpg" alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">Card title</h5>
                                        <h5 className="card-title mb-0">Price here</h5>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                            <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src="img/300x200/placeholder.jpg" alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">Card title</h5>
                                        <h5 className="card-title mb-0">Price here</h5>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                            <li className="list-inline-item"><span className="badge badge-light">badge</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Link to="" className="btn btn-primary">Know more details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
