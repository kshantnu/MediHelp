const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const {mongoose} = require('./db-config');

const {UserSubmissions} = require('./models/usersubmissions');
const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(__dirname + '/dist'));

app.use(bodyparser.json());
app.get('/*', function (req, res) {
  res.sendfile(path.join(__dirname + '/dist/index.html'));
})

app.post('/getsuggestion', (req, res) => {
  const tagsToSearchFor = req.body.tags;
  const queries = [];
  tagsToSearchFor.map(item => {
    queries.push(UserSubmissions.find({diseases: item}));
    queries.push(UserSubmissions.find({symptoms: item}));
    queries.push(UserSubmissions.find({medicines: item}));
    queries.push(UserSubmissions.find({doctors: item}));
  });
  Promise
    .all(queries)
    .then(resultArray => {
      res.send(resultArray);
    })
})

app.post('/submitsuggestion', (req, res) => {
  const userSubmissions = new UserSubmissions({symptoms: req.body.symptoms, doctors: req.body.doctors, medicines: req.body.medicines, comments: req.body.comments});
  userSubmissions
    .save()
    .then(userSubmittedDoc => {
      res.send(userSubmittedDoc);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.listen(port, () => {
  console.log(`app started at ${port}`);
})
