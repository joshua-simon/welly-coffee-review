import React from 'react'
import AddReview from './components/AddReview'
import Main from './components/Main'
import AllReviews from './components/AllReviews'
import './styles.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return(
    <Router>
    <div>
      <Switch>
      <Route path ='/' exact component = {Main}/>
      <Route path ='/add-review' component = {AddReview}/>
      <Route path ='/all-reviews' component = {AllReviews}/>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
