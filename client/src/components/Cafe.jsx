import React from 'react'
import {Link} from 'react-router-dom'

const Cafe = (props) => {
    const {cafes} = props
    return(
        <div>
            {
                cafes.map(cafe =>{
                    const {cafeName,photoURL} = cafe
                    
                    return (
                    <Link to = {`/cafe-reviews/${cafeName}`} style={{ textDecoration: 'none' }} >
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

export default Cafe