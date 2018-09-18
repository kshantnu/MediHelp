import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SuccessResult} from '../models/successresult';

@Injectable({
  providedIn: 'root'
})
export class PostSuggestionService {
  symptoms:Array<String>;
  medicines:Array<String>;
  doctors:Array<String>;
  comments:String;
 
  constructor(private http: HttpClient ) {

  }
  submitSuggestion(formValues) : Promise < any > {
    const requestObject =  this.prepareRequestObject(formValues);
     const url: string = "http://localhost:3000/submitsuggestion";
      const promise = new Promise ((resolve,reject) => {
        this.http.post(url,requestObject).toPromise().then((response:SuccessResult) => {
          if(response._id)resolve(response);
          else reject(response);
        }).catch(err => reject(err));
      });
      return promise;
  }

  resetSubmissionForm() {

  }

  prepareRequestObject(formValues) {
    
      const symptoms = formValues.symptoms && formValues.symptoms.split(',').map(item => item.trim());
      const medicines = formValues.medicines && formValues.medicines.split(',').map(item => item.trim());
      const doctors = formValues.doctors && formValues.doctors.split(',').map(item => item.trim());
      const comments = formValues.comments;
      const requestObject = {
        symptoms,
        medicines,
        doctors,
        comments
      };
      return requestObject;
      



    //   {
  //     "symptoms": ["breathing problem", "dizziness"],
  //     "medicines": ["citrizine"],
  //     "doctors": ["shantnu","chandani"],
  //     "comments": "hdfhehfghghjgghj"
  // }
  }
}
