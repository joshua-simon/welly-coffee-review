import React, {useState} from 'react'
import axios from 'axios'


const AddReview = () => {

    const [{userName,stars,title,photo,blurb,cafeName}, setFormDetails] = useState({userName:'', stars:0, title:'', photo:'', blurb:'',cafeName:''})
    const [submittedResponse, setSubmittedResponse] = useState('')
    const [showMessage, setShowMessage] = useState(true)

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
        axios.post('http://localhost:5000/api/add-review',newReview)
        .then(result => {
            setSubmittedResponse(result.data.message)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleClick = () => {
        setShowMessage(false)
    }

    const setResponseMessage = (responseState) => {
        let message = ''
        if(responseState === 'Review successfully submitted'){
            message = <div>Review submitted!<button onClick = {handleClick}>x</button></div>
        } else if (responseState === ''){
            message = null
        }else{
            message = 'Error: review not submitted. Please try again later'
        }
        return message
      }

      const message = setResponseMessage(submittedResponse)

    return(
        <>
        <form onSubmit ={handleSubmit}>
            <h2 className = 'main-subheading'>Add review</h2>
            <label>
                User name<br></br>
                <input type = 'text' id = 'userName' name = 'userName' onChange = {handleChange}></input>
            </label>
            <label>
                Rating<br></br>
                <input type = 'number' id = 'stars' name = 'stars' onChange = {handleChange}></input>
            </label>
            <label>
                Title<br></br>
                <input type = 'text' id = 'title' name = 'title' onChange = {handleChange}></input>
            </label>
            <label>
                Photo URL<br></br>
                <input type = 'text' id = 'photo' name = 'photo' onChange = {handleChange}></input>
            </label>
            <label>
                Blurb<br></br>
                <input type = 'text' id = 'blurb' name = 'blurb' onChange = {handleChange}></input>
            </label>
            <label>
                Cafe<br></br>
                <select id = 'cafeName' name = 'cafeName' onChange = {handleChange}>
                <option value="Customs Coffee">Customs Coffee</option>
                <option value="Milk Crate">Milk Crate</option>
                <option value="Best Ugly Bagels">Best Ugly Bagels</option>
                <option value="Lamasons">Lamasons</option>
                <option value="Retrogrove">Retrogrove</option>
                <option value="Midnight Espresso">Midnight Espresso</option>
                </select>
            </label>
            <button type = 'submit'>Submit</button>
            <div className = 'submit-message'>
            {
                showMessage === true ? 
                message
                :
                null
            }
            </div>
        </form>
        </>
    )
}

export default AddReview