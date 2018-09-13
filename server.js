const express = require('express');
const bodyparser = require('body-parser');

const {mongoose} = require('./db-config');

const {UserSubmissions} = require('./models/usersubmissions');
//const {Tags} = require('./models/tags');
//const {Symptoms} = require('./models/symptoms');

const app = express();

app.use(bodyparser.json());



app.post('/getsuggestion',(req,res) => {
  const tagsToSearchFor = req.body.tags;
  const queries = [];
  tagsToSearchFor.map(item => {
    queries.push(UserSubmissions.find({diseases: item}));
    queries.push(UserSubmissions.find({symptoms: item}));
  });
  Promise.all(queries).then(resultArray => {
    res.send(resultArray);
  })
})



app.post('/submitsuggestion',(req,res) => {
  const userSubmissions = new UserSubmissions({
      diseases : req.body.diseases,
      symptoms: req.body.symptoms,
      doctors: req.body.doctors,
      comments: req.body.comments,
  });
  userSubmissions.save().then(userSubmittedDoc => {
    res.send(userSubmittedDoc);
  }).catch((err) => {
    console.log(err);
  })
})

app.listen(3000,() => {
    console.log('app started at 3000');
})

