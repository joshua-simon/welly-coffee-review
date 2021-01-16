import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Review from './Review'
import CafeHeader from './CafeHeader'
import {averageStarRating} from '../helperFunctions'

const CafeReviews = ({ match }) => {
  const [cafe, setCafe] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`/api/cafe/${match.params.id}`).then((result) => {
      setCafe(result.data);
    })
    axios.get("http://localhost:5000/api/all-reviews")
      .then((review) => {
        setReviews(review.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  let filteredReviews = reviews.filter((review) => {
    return review.cafeName === cafe.cafeName;
  })

   let okFineDontWork = (averageStarRating(filteredReviews))
  
  return (
      <>
    <div>
      <CafeHeader cafe={cafe} thing ={okFineDontWork}/>
      <div className="reviews-container">
      <Review reviews={filteredReviews}/>
      </div>
    </div>
    </>
  )
}

export default CafeReviews