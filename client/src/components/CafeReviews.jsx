import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Review from './Review'
import CafeHeader from './CafeHeader'
import Main from './Main'
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
      <Link to = {'/'}
      style={{ textDecoration: "none", color: "#686262" }}
      >
      <h3>Home</h3>
      </Link>
      <CafeHeader cafe={cafe} thing ={okFineDontWork}/>
      <div className="reviews-container">
      <Review reviews={filteredReviews}/>
      </div>
    </div>
    </>
  )
}

export default CafeReviews