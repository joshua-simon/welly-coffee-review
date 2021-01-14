import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Review from './Review'

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
  });

  return (
    <div>
      <div className="cafe-header">
        <img src={cafe.photoURL}></img>
        <h1>{cafe.cafeName}</h1>
      </div>
      <ul className = 'contact-details'>
      <li>{cafe.address}</li>
     <li>{cafe.phoneNumber}</li> 
      <li><a href ={cafe.website} style={{ textDecoration: 'none' }}  >website</a></li>
      </ul>
      <div className = 'reviews-container'>
        <Review reviews={filteredReviews} />
      </div>
    </div>
  );
};

export default CafeReviews