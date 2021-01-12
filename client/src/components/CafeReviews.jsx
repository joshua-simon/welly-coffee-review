import React,{useState, useEffect} from 'react'
import axios from 'axios'

const CafeReviews = ({match}) => {
  const [cafe,setCafe] = useState([])

  useEffect(() => {
    axios.get(`/api/cafe/${match.params.id}`)
    .then(result => {
        setCafe(result.data)
    })
  },[])

  return(
      <div>
        <div className = 'cafe-header'>
         <img src = {cafe.photoURL}></img> 
         <h1>{cafe.cafeName}</h1>
         </div>
      </div>
  )
}

export default CafeReviews