import React from 'react'
import BlogItem from '../blog/Item'

export default function Tools() {
    return (
        <React.Fragment>
            <section className="blog-list">
                <div className="container">
                    <div className="cards row">
                        <BlogItem styler="col-sm-6 col-md-4" />
                        <BlogItem styler="col-sm-6 col-md-4" />
                        <BlogItem styler="col-sm-6 col-md-4" />
                        <BlogItem styler="col-sm-6 col-md-4" />
                        <BlogItem styler="col-sm-6 col-md-4" />
                        <BlogItem styler="col-sm-6 col-md-4" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
