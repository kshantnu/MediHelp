import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SuccessResult} from '../models/successresult';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostSuggestionService {
  symptoms:Array<String>;
  medicines:Array<String>;
  doctors:Array<String>;
  comments:String;
  baseUrl:String;
 
  constructor(private http: HttpClient ) {
   if(!environment.production) {
     this.baseUrl = 'http://localhost:3000/';
   } else {
    this.baseUrl = 'https://afternoon-atoll-50980.herokuapp.com/';
   }
  }
  submitSuggestion(formValues) : Promise < any > {
    const requestObject =  this.prepareRequestObject(formValues);
     const url: string = `${this.baseUrl}submitsuggestion`; 
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
