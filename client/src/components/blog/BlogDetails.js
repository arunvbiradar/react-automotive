import React from 'react'
import Breadcrumbs from '../breadcrumbs'
import { Link } from 'react-router-dom'

export default function BlogDetails() {
    return (
        <React.Fragment>
            <div className="container">
                <Breadcrumbs />
                <div className="row">
                    <div className="col-md-9">
                        <div className="bg-light">
                            <div className="jumbotron bg-light text-center mb-0">
                                <h2 className="display-3">Hello, World!</h2>
                                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="card-body">
                                <h2 className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae laboriosam quo dignissimos tempore reiciendis itaque nostrum ab eos praesentium hic. Unde suscipit, dolores nihil totam cupiditate voluptatem harum qui id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos, magnam tempora quia rem esse molestiae provident, iusto, enim perferendis id ab facere itaque et qui odit quaerat ut illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus eaque adipisci eligendi repudiandae magni consectetur, quisquam earum animi, saepe ad tempora natus facilis reprehenderit numquam error laboriosam aliquid! Reprehenderit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae laboriosam quo dignissimos tempore reiciendis itaque nostrum ab eos praesentium hic. Unde suscipit, dolores nihil totam cupiditate voluptatem harum qui id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos, magnam tempora quia rem esse molestiae provident.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae laboriosam quo dignissimos tempore reiciendis itaque nostrum ab eos praesentium hic. Unde suscipit, dolores nihil totam cupiditate voluptatem harum qui id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos, magnam tempora quia rem esse molestiae provident, iusto, enim perferendis id ab facere itaque et qui odit quaerat ut illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus eaque adipisci eligendi repudiandae magni consectetur, quisquam earum animi, saepe ad tempora natus facilis reprehenderit numquam error laboriosam aliquid! Reprehenderit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae laboriosam quo dignissimos tempore reiciendis itaque nostrum ab eos praesentium hic. Unde suscipit, dolores nihil totam cupiditate voluptatem harum qui id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos, magnam tempora quia rem esse molestiae provident, iusto, enim perferendis id ab facere itaque et qui odit quaerat ut illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus eaque adipisci eligendi repudiandae magni consectetur, quisquam earum animi, saepe ad tempora natus facilis reprehenderit numquam error laboriosam aliquid! Reprehenderit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae laboriosam quo dignissimos tempore reiciendis itaque nostrum ab eos praesentium hic. Unde suscipit, dolores nihil totam cupiditate voluptatem harum qui id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos, magnam tempora quia rem esse molestiae provident.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae laboriosam quo dignissimos tempore reiciendis itaque nostrum ab eos praesentium hic. Unde suscipit, dolores nihil totam cupiditate voluptatem harum qui id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos, magnam tempora quia rem esse molestiae provident, iusto, enim perferendis id ab facere itaque et qui odit quaerat ut illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus eaque adipisci eligendi repudiandae magni consectetur, quisquam earum animi, saepe ad tempora natus facilis reprehenderit numquam error laboriosam aliquid! Reprehenderit.</p>
                            </div>
                        </div>
                    </div>
                    <aside className="col-md-3">
                        <div className="card">
                            <div className="card-header">Search Topics</div>
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
                            <div className="card-header">Popular Topics</div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-header">Recent Topics</div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-header">Categories</div>
                            <div className="card-body">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item"><Link to="">Cras</Link></li>
                                    <li class="list-inline-item"><Link to="">Dapibus</Link></li>
                                    <li class="list-inline-item"><Link to="">Morbi</Link></li>
                                    <li class="list-inline-item"><Link to="">Cras</Link></li>
                                    <li class="list-inline-item"><Link to="">ac</Link></li>
                                    <li class="list-inline-item"><Link to="">Dapibus</Link></li>
                                    <li class="list-inline-item"><Link to="">Morbi</Link></li>
                                    <li class="list-inline-item"><Link to="">Porta ac</Link></li>
                                    <li class="list-inline-item"><Link to="">eros</Link></li>
                                    <li class="list-inline-item"><Link to="">Dapibus</Link></li>
                                </ul>
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
