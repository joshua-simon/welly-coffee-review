const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const Review = require('./models/reviews')
const Cafe = require('./models/cafes')
const bodyParser = require('body-parser');
require('dotenv').config()


//Server
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));


//Middleware

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded())
app.use(cors())

//Mongo config
const dbURI = 'mongodb+srv://joshydsimon:Josh1985!@mochawelly.8cxdz.mongodb.net/MochaWelly?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => {
    console.log('connected to db')
})
.catch((err) => {
    console.log(err)
})

//Routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  })

app.get('/api/all-reviews', (req,res) => {
    Review.find()
    .then((result) => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('/api/review-by-cafe/:id', (req,res) => {
    const id = req.params.id
    Review.find({cafeReference:id})
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('/api/all-cafes', (req,res) => {
    Cafe.find()
    .then((result) => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('/api/cafe/:id', (req,res) => {
    const id =req.params.id
    Cafe.findById(id)
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
})

app.post('/api/add-review',(req,res) => {
    const review = new Review(req.body)
    review.save()
    .then(() => {
        console.log('review successfully posted')
        res.status(200)
        res.json({"message": "Review successfully submitted"})
    })
    .catch(err => {
        console.log(err)
    })
})

app.delete('/api/reviews/:id', (req,res) => {
    const id = req.params.id
    Review.findByIdAndDelete(id)
    .then(() => {
       console.log('review successfully deleted')
    })
    .catch(err => {
        console.log(err)
    })
})
