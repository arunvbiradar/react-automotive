import React from 'react';
import Title from '../common/Title';
import BlogItem from './Item';

export default function BlogList() {
    return (
        <section className="Blog">
            <div className="container">
                <Title title="From our Blog" />
                <div className="cards row">
                    <BlogItem styler="col-sm-6 col-md-3" />
                    <BlogItem styler="col-sm-6 col-md-3" />
                    <BlogItem styler="col-sm-6 col-md-3" />
                    <BlogItem styler="col-sm-6 col-md-3" />
                </div>
            </div>
        </section>
    )
}
