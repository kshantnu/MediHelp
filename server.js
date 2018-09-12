const express = require('express');
const bodyparser = require('body-parser');

const {mongoose} = require('./db-config');
const {UserSubmissions} = require('./models/usersubmissions');
//const {Tags} = require('./models/tags');
const app = express();

app.use(bodyparser.json());

app.post('/submitsuggestion',(req,res) => {
  const userSubmissions = new UserSubmissions({
      diseases : req.body.diseases,
      symptoms: req.body.symptoms,
      doctors: req.body.doctors,
      comments: req.body.comments,
  })
  userSubmissions.save().then((doc) => {
    res.send(doc);
    
  }).catch((err) => {
   res.status(400).send(err);
  })
})

app.listen(3000,() => {
    console.log('app started at 3000');
})

