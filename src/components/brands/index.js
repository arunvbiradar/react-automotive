import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../breadcrumbs'
import BrandItem from '../home/BrandItem'

export default function Brands() {
    return (
        <React.Fragment>
            <div className="container">
                <Breadcrumbs />
                <div className="row">
                    <div className="col-md-9">
                        <BrandItem />
                    </div>
                    <aside className="col-md-3">
                        <div className="card">
                            <div className="card-header">Search Brand</div>
                            <div className="card-body">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter keyword" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">Search</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">Subscribe for Updates</div>
                            <div className="card-body">
                                <p className="card-text small">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter email" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">Subscribe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </React.Fragment>
    )
}
