import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SearchResult} from '../models/searchresult';
import {FetchResultService} from '../searchresultlist/fetchresult.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
@Output() searchClickEvent = new EventEmitter<SearchResult[]>();
  disableButton: boolean = true;
  constructor(private _fetchResultService: FetchResultService) { }

  ngOnInit() {
    
  }

  fetchResult(queryString: String) { 
    this._fetchResultService.fetchResult(queryString).then(res => {
      this.searchClickEvent.emit(res);
    }).catch(err => {
      console.log(err);
    })
 
    
  }

  enableButton(queryString: String) {
    if(queryString){
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
  }
  

}
