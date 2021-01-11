import React from 'react'
import axios from 'axios'

const Review = (props) => {
    const {reviews} = props

    const handleClick = (id) => {
        axios.delete(`/reviews/${id}`)
        .then(() => {
            console.log('review successfully deleted')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
           {
               reviews.map(review => {
                   const {title,userName,blurb,stars,cafe,_id} = review
                   return(
                       <div>
                           <h1>{cafe}</h1>
                           <h2>{`Rating: ${stars} out of 5`}</h2>
                           <h2>{`Review by: ${userName}`}</h2>
                           <p>{blurb}</p>
                           <button onClick = {()=> handleClick(_id)}>Delete</button>
                       </div>
                   )
               })
           }
        </div>
    )
}


    // const filteredReviews = reviews.filter(review => {
    //     return review.cafe=== 'Customs Coffee'
    // })
export default Review