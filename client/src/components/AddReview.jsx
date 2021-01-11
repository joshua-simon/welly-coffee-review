import React, {useState} from 'react'
import axios from 'axios'

const AddReview = () => {

    const [{userName,stars,title,photo,blurb,cafeName}, setFormDetails] = useState({userName:'', stars:0, title:'', photo:'', blurb:'',cafeName:''})

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
            blurb:blurb,
            cafeName:cafeName
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
            <label>
                Cafe
                <select id = 'cafeName' name = 'cafeName' onChange = {handleChange}>
                <option value="Customs Coffee">Customs Coffee</option>
                <option value="Milk Crate">Milk Crate</option>
                <option value="Best Ugly Bagels">Best Ugly Bagels</option>
                </select>
            </label>
            <button type = 'submit'>Submit</button>
        </form>
    )
}

export default AddReview