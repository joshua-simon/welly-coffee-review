import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cafe from './Cafe'

const CafeList = () => {
    const [cafes, setCafe] = useState([])

    useEffect(() => {
        axios.get('/api/all-cafes')
        .then(cafe => {
            setCafe(cafe.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return(
        <div className = 'cafe-container-container'>
            <h2>Cafes</h2>
            <Cafe cafes = {cafes}/>
        </div>
    )
}

export default CafeList