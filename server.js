const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const {mongoose} = require('./db-config');

const {UserSubmissions} = require('./models/usersubmissions');
const {Symptoms} = require('./models/symptoms');
const {Medicines} = require('./models/medicines');
const {Doctors} = require('./models/doctors');

const port = process.env.PORT || 3000;

const app = express();
//console.log('ddd', __dirname);
app.use(express.static(__dirname + '/public/dist'));

app.use(bodyparser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/getsuggestion', (req, res) => {
  const tagsToSearchFor = req.body.tags;
  const queries = [];
  tagsToSearchFor.map(item => {
    //queries.push(UserSubmissions.find({diseases: item}));
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

app.get('/getautosuggestion',(req,res) => {
  var regex = new RegExp(req.query['q'], 'i');
  var queries = [];
  const medicines = [];
  const doctors = [];
  const symptoms = [];
  let resultObj;
  queries.push(Medicines.find({medicines: regex}).limit(5));
  queries.push(Symptoms.find({symptoms: regex}).limit(5));
  queries.push(Doctors.find({doctors: regex}).limit(5));
  Promise
    .all(queries)
    .then(resultArray => {   
      if (resultArray && resultArray.length > 0) {
        resultArray[0] && resultArray[0].map((item) => {
          if (item && item.medicines[0]){
            medicines.push(item.medicines);
          }
          // item && item.medicines && item.medicines.map((item) => {
          //   medicines.push(item);
            
          // })
        });
        resultArray[0] && resultArray[1].map((item) => {
          if (item && item.symptoms[0]){
            symptoms.push(item.symptoms);
          }
          // item && item.medicines && item.symptoms.map((item) => {
          //   symptoms.push(item);
          // })
        });
        resultArray[0] && resultArray[2].map((item) => {
          if (item && item.doctors[0]){
            doctors.push(item.doctors);
          }
          // item && item.medicines && item.doctors.map((item) => {
          //   doctors.push(item);
          // })
        })
        resultObj = {
          medicines,
          symptoms,
          doctors
        }  
      }
      
      res.send(resultObj);
    }) 
})

app.post('/submitsuggestion', (req, res) => {
  const queries = [];
  const symptoms = new Symptoms({symptoms: req.body.symptoms});
  const medicines = new Medicines({medicines: req.body.medicines});
  queries.push(symptoms.save());
  queries.push(medicines.save());
  //if (req.body.doctors && req.body.doctors.length > 0) {
    const doctors = new Doctors({doctors: req.body.doctors});
    queries.push(doctors.save());
 // }
  const userSubmissions = new UserSubmissions({symptoms: req.body.symptoms, doctors: req.body.doctors, medicines: req.body.medicines, comments: req.body.comments});
  queries.push(userSubmissions.save());
  Promise
    .all(queries)
    .then(userSubmittedDoc => {
      res.send(userSubmittedDoc);
    },err => res.send(err));
    // .catch((err) => {
    //   console.log(err);
    //   res.send(err);
    // })
    // const userSubmissions = new UserSubmissions({symptoms: req.body.symptoms,
    // doctors: req.body.doctors, medicines: req.body.medicines, comments:
    // req.body.comments}); userSubmissions   .save()   .then(userSubmittedDoc => {
    //   res.send(userSubmittedDoc);   })   .catch((err) => {     console.log(err);
    //  })
})

app.get('*', function (req, res) {
  res.sendfile(path.join(__dirname + '/public/dist/index.html'));
  
})

app.listen(port, () => {
  console.log(`app started at ${port}`);
})
