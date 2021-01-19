import React, {useState, useEffect} from 'react'
import Review from './Review'
import axios from 'axios'

const AllReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
    axios.get('/api/all-reviews')
    .then(review => {
        setReviews(review.data)
    })
    .catch(err => {
        console.log(err)
    })
},[])

    return(
        <div>
        <h1>Reviews</h1>
        <Review reviews = {reviews}/>
        </div>
    )
}

export default AllReviews

