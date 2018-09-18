import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from '../models/searchresult';
//import 'rxjs/add/operator/toPromise';

@Injectable({providedIn: 'root'})
export class FetchResultService {
  queryArray : Array < String > = [];
  fetchedResults : Array < SearchResult >;
  constructor(private http : HttpClient) {}

  fetchResult(queryString : String) : Promise < any > {
    if(!queryString) return;
    this.queryArray = [];
    this.queryArray = queryString.split(',').map(item => item.trim());
    const url: string = "http://localhost:3000/getsuggestion";
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


  removeDuplicates = (reducedResponse, prop) => {
    return reducedResponse.filter((obj, pos, arr) => {
      return arr
        .map(mapObj => mapObj[prop])
        .indexOf(obj[prop]) === pos;
    });
  }
}
