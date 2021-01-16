import React from 'react'
import {Link} from 'react-router-dom'

const Cafe = (props) => {
  const { cafes } = props;
  return (
    <div className = 'cafe-grid'>
      {
      cafes.map((cafe) => {
        const { cafeName, photoURL, _id } = cafe;
        return (
          <Link
            to={`/cafe-reviews/${_id}`}
            style={{ textDecoration: "none", color: "#686262" }}
          >
            <div className="cafe-container">
              <h2>{cafeName}</h2>
              <img src={photoURL}></img>
            </div>
          </Link>
        )
      })
      }
    </div>
  )
}

export default Cafe