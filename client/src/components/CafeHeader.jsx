import React from 'react'

const CafeHeader = (props) => {
  const { cafe } = props
  return (
    <div>
      <div className="cafe-header">
        <img src={cafe.photoURL}></img>
        <h1>{cafe.cafeName}</h1>
      </div>
      <ul className="contact-details">
        <li>{cafe.address}</li>
        <li>{cafe.phoneNumber}</li>
        <li>
          <a href={cafe.website} style={{ textDecoration: "none" }}>
            website
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CafeHeader