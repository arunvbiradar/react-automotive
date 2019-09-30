import React from 'react'

export default function Title({type, title}) {
    return <h3 className={`font-weight-light text-center title ${type}`}>{title}</h3>
}
