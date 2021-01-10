import React from 'react'

const Cafe = (props) => {
    const {cafes} = props
    return(
        <div>
            {
                cafes.map(cafe =>{
                    const {cafeName,photoURL} = cafe
                    return (
                    <div className = 'cafe-container'>
                        <h2>{cafeName}</h2>
                        <img src = {photoURL}></img>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Cafe