import React from 'react'
import CafeList from './CafeList'
import Nav from './Nav'
import AddReview from './AddReview'

const Main = () => {
  return (
    <div className="main-container">
      <Nav />
      <div className = 'main-block-one'>
        <CafeList />
        <AddReview />
      </div>
    </div>
  );
};

export default Main