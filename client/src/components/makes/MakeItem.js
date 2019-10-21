import React from "react";
import { Link } from "react-router-dom";

export default function MakeItem({ makes }) {
  return (
    <section className='brands'>
      <div className='container'>
        <div className='text-center'>
          <ul className='list-inline'>
            {makes.map(make => {
              return (
                <li key={make._id} className='list-inline-item'>
                  <div className='card'>
                    <Link to={`/makes${make.slug}`}>
                      <img
                        src={make.image}
                        alt={make.name}
                        className='car-img-top'
                      />
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
