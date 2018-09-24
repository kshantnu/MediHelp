import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from '../models/searchresult';
import {environment} from '../../environments/environment';
import {AutoSuggestions} from '../models/autosuggstions';
import { Observable } from 'rxjs';
//import { Subject } from 'rxjs/Subject';

//import 'rxjs/add/operator/toPromise';

@Injectable({providedIn: 'root'})
export class FetchResultService {
  queryArray : Array < String > = [];
  fetchedResults : Array < SearchResult >;
  baseUrl:String;
  hideAutoSuggestions: boolean = false;
  constructor(private http : HttpClient) {
    if(!environment.production) {
      this.baseUrl = 'http://localhost:3000/';
    } else {
     this.baseUrl = 'https://medicinehelp.herokuapp.com/';
    }
  }

  fetchResult(queryString : String) : Promise < any > {
    if(!queryString) return;
    this.queryArray = [];
    this.queryArray = queryString.split(',').map(item => item.trim().toLowerCase());
    const url: string = `${this.baseUrl}getsuggestion`;
    const promise = new Promise((resolve, reject) => {
      this
        .http
        .post(url, {tags: this.queryArray})
        .toPromise()
        .then((response : Array < Array < SearchResult >>) => {
          const reducedResponse = response.reduce((inititalItem : Object[], nextItem : Object[]) => {
            nextItem.map((item : SearchResult) => {
              inititalItem.push(item);
            });
            return inititalItem;
          }, [])
          const reducedUniqueResponse = this.removeDuplicates(reducedResponse, '_id');
          resolve(reducedUniqueResponse);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
    return promise;
  }

  fetchAutoSuggestions(queryString:String): Observable<Object> {
    if(!this.hideAutoSuggestions && queryString.trim()) {
      const url = `${this.baseUrl}getautosuggestion?q=${queryString}`
      return this.http.get(url);
    } else {
      return new Observable<{}>();
    }   
  }


  removeDuplicates = (reducedResponse, prop) => {
    return reducedResponse.filter((obj, pos, arr) => {
      return arr
        .map(mapObj => mapObj[prop])
        .indexOf(obj[prop]) === pos;
    });
  }

  resetSuggestions(data) {
    this.hideAutoSuggestions = data.hideAutoSugggestions;
  }
}
