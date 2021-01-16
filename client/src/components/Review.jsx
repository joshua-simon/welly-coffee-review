import React from 'react'
import axios from 'axios'
import {convertToStars} from '../helperFunctions'

const Review = (props) => {
  const { reviews } = props;

  const handleClick = (id) => {
    axios
      .delete(`/api/reviews/${id}`)
      .then(() => {
        console.log("review successfully deleted");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      {
      reviews.map((review) => {
        const { title, userName, blurb, stars, _id } = review;
        const starRating = convertToStars(stars)
        return (
          <div  className = 'review-container'>
            <h1>{title}</h1>
            {starRating.map((item) => {
              return item
            })}
            <h2>{`Review by: ${userName}`}</h2>
            <p>{blurb}</p>
            <button onClick={() => handleClick(_id)}>Delete</button>
          </div>
        )
      })
      }
    </div>
  )
}

export default Review