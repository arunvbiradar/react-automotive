import React from 'react'

export default function Hero() {
    return (
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
    )
}
