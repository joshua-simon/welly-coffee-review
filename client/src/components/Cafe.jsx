import React from 'react'

const Cafe = (props) => {
    const {cafes} = props
    return(
        <div>
            {
                cafes.map(cafe =>{
                    return (<div>
                        <h1>{cafe.cafeName}</h1>
                        <img src = {cafe.photoURL}></img>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Cafe