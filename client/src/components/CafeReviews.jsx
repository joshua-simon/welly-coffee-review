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
          {cafe.cafeName}
          
      </div>
  )
}

export default CafeReviews