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
    this.baseUrl = 'https://medicinehelp.herokuapp.com/';
   }
  }
  submitSuggestion(formValues) : Promise < any > {
    const requestObject =  this.prepareRequestObject(formValues);
     const url: string = `${this.baseUrl}submitsuggestion`; 
      const promise = new Promise ((resolve,reject) => {
        this.http.post(url,requestObject).toPromise().then((response:SuccessResult) => {
          if(response && response[3]._id)resolve(response);
          else reject(response);
        }).catch(err => reject(err));
      });
      return promise;
  }

  prepareRequestObject(formValues) {
    
      const symptoms = formValues.symptoms ? formValues.symptoms.split(',').map((item : String) => item.trim().toLowerCase()) : [];
      const medicines = formValues.medicines ? formValues.medicines.split(',').map((item : String) => item.trim().toLowerCase()) : [];
      const doctors = formValues.doctors ? formValues.doctors.split(',').map((item : String) => item.trim().toLowerCase()) : [];
      const comments = formValues.comments;
      const requestObject = {
        symptoms,
        medicines,
        doctors,
        comments
      };
      return requestObject;
  }
}
