import React, {useState} from 'react'
import axios from 'axios'

const AddReview = () => {

    const [{userName,stars,title,photo,blurb}, setFormDetails] = useState({userName:'', stars:0, title:'', photo:'', blurb:''})

    const handleChange = (e) => {
        e.preventDefault()
        const {name,value} = e.target
        setFormDetails(prevForm => ({
            ...prevForm,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        console.log('submit function reached')
        e.preventDefault()
        const newReview = {
            userName:userName,
            stars:stars,
            title:title,
            photo:photo,
            blurb:blurb
        }
        console.log(newReview)
        axios.post('http://localhost:5000/api/add-review',newReview)
        .then((result) => {
            console.log('review successfully posted')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <form onSubmit ={handleSubmit}>
            <label>
                User name
                <input type = 'text' id = 'userName' name = 'userName' onChange = {handleChange}></input>
            </label>
            <label>
                Rating
                <input type = 'number' id = 'stars' name = 'stars' onChange = {handleChange}></input>
            </label>
            <label>
                Title
                <input type = 'text' id = 'title' name = 'title' onChange = {handleChange}></input>
            </label>
            <label>
                Photo URL
                <input type = 'text' id = 'photo' name = 'photo' onChange = {handleChange}></input>
            </label>
            <label>
                Blurb
                <input type = 'text' id = 'blurb' name = 'blurb' onChange = {handleChange}></input>
            </label>
            <button type = 'submit'>Submit</button>
        </form>
    )
}

export default AddReview