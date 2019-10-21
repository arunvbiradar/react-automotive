import React, { useEffect, useState } from "react";
import Breadcrumbs from "../breadcrumbs";
import MakeItem from "./MakeItem";
import { connect } from "react-redux";
import { getMakes } from "./../../actions/makes";

function Makes({ getMakes, makes: { makes }, history }) {
  useEffect(() => {
    getMakes();
    // console.log(getMakes());
  }, [getMakes]);

  const [makeSearch, setMakeSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let path = `/makes/${makeSearch.toLowerCase()}`;
    history.push(path);
  };

  const onChange = e => {
    setMakeSearch(e.target.value);
  };

  return (
    <React.Fragment>
      <div className='container'>
        <Breadcrumbs />
        <div className='row'>
          <div className='col-md-9'>
            <MakeItem makes={makes} />
          </div>
          <aside className='col-md-3'>
            <div className='card'>
              <div className='card-header'>Search Brand</div>
              <div className='card-body'>
                <form onSubmit={e => handleSubmit(e)}>
                  <div className='input-group'>
                    <input
                      type='text'
                      value={makeSearch}
                      className='form-control'
                      placeholder='Enter keyword'
                      onChange={e => onChange(e)}
                    />
                    <div className='input-group-append'>
                      <button type='submit' className='input-group-text'>
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='card'>
              <div className='card-header'>Subscribe for Updates</div>
              <div className='card-body'>
                <p className='card-text small'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter email'
                  />
                  <div className='input-group-append'>
                    <span className='input-group-text'>Subscribe</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </React.Fragment>
  );
}

getMakes();
// const mapStateToProps = state => ({

//     return{
//   }
// });
const mapStateToProps = state => ({
  makes: state.makes
});
export default connect(
  mapStateToProps,
  { getMakes }
)(Makes);
