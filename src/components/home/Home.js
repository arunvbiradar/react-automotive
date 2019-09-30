import React from 'react'
import Hero from './Hero'
import Featured from './Featured'
import BrandItem from './BrandItem'
import CompareList from '../compare/CompareList'
import BlogList from '../blog/BlogList'

export default function Home() {
    return (
        <React.Fragment>
            <Hero />
            <Featured />
            <BrandItem />
            <CompareList />
            <BlogList />
        </React.Fragment>
    )
}
