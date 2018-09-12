const express = require('express');
const bodyparser = require('body-parser');

const {mongoose} = require('./db-config');
const {UserSubmissions} = require('./models/usersubmissions');
const {Tags} = require('./models/tags');
const app = express();

app.use(bodyparser.json());

app.post('/submitsuggestion',(req,res) => {
  const userSubmissions = new UserSubmissions({
      diseases : req.body.diseases,
      symptoms: req.body.symptoms,
      doctors: req.body.doctors,
      comments: req.body.comments,
  })
  userSubmissions.save().then(userSubmittedDoc => {
    saveTagWithIndex(userSubmittedDoc,res);
  }).catch((err) => {
    console.log(err);
  })
})
 
const saveTagWithIndex = (userSubmittedDoc , res) => {  
  userSubmittedDoc.diseases.map(disease => {      
    Tags.findOne({disease}).then(tagFoundDoc => {
      console.log('tagfound', tagFoundDoc);
      if(!tagFoundDoc) {
       const tag = new Tags({
        disease,
        index: [userSubmittedDoc._id]
       });
       tag.save().then(tagSaved => {
         console.log('tagsaved',tagSaved);
       },(err) => {
         console.log(err);
       })
      } else {
        Tags.update({disease},{$push: {index: userSubmittedDoc._id}},(err,res) => {
          if(err){
            console.log(err);
          } else {
            console.log(res);
          }
        })
      }
    })
  })
  res.send('OK');
} 

app.listen(3000,() => {
    console.log('app started at 3000');
})

