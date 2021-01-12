import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


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
                {/* <h3>See reviews:</h3> */}
                {
                cafes.map(cafe =>{
                    const {cafeName,photoURL,_id} = cafe
                    
                    return (
                    <Link to = {`/cafe-reviews/${_id}`} style={{ textDecoration: 'none', color:'#686262' }} >
                        <div className = 'cafe-container'>
                            <h2>{cafeName}</h2>
                            <img src = {photoURL}></img>
                        </div>
                    </Link>
                    )
                })
            }
            </div>

    )
}

export default CafeList