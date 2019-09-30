import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs() {
    return (
        <div className="breadcrumbs">
            <ol className="breadcrumb mb-0 px-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/">Blog</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Details</li>
            </ol>
        </div>
    )
}
