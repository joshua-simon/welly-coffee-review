import React from 'react'

const Review = (props) => {
    const {reviews} = props

    return(
        <div>
           {
               reviews.map(review => {
                   const {title,userName,blurb,stars} = review
                   return(
                       <div>
                           <h1>{title}</h1>
                           <h2>{`Rating: ${stars} out of 5`}</h2>
                           <h2>{`Review by: ${userName}`}</h2>
                           <p>{blurb}</p>
                       </div>
                   )
               })
           }
        </div>
    )
}

export default Review