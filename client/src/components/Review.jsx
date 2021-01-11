import React from 'react'
import axios from 'axios'

const Review = (props) => {
    const {reviews} = props

    const handleClick = (id) => {
        axios.delete(`/api/reviews/${id}`)
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

                   const convertToStars = (stars) => {
                       const num = parseInt(stars)
                       const star = <i>★</i>
                       const arr=[]
                       for(let i=0; i<=num;i++){
                            if(arr.length <num){
                                arr.push(star)
                            }
                       }
                       return arr
                   }

                   const starRating = convertToStars(stars)

                   return(
                       <div>
                           <h1>{cafe}</h1>
                           {
                              starRating.map(item => {
                                  return item
                              })
                           }
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