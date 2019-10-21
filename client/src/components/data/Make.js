import React from 'react';
import {makes} from '../../data/make';

export default function Make() {
    return (
        <div className="container">
            <ul className="list-inline">
                {console.log(makes)}
                {makes.map(make => <li className="list-inline-item"><strong>{make}, &nbsp;</strong></li>)}
            </ul>
        </div>
    )
}
