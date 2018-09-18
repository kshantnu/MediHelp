import {Component, OnInit, Input} from '@angular/core';
import {SearchResult} from '../models/searchresult';
import {ActivatedRoute} from "@angular/router";
import {FetchResultService} from '../searchbar/fetchresult.service';

@Component({selector: 'app-searchresultlist', templateUrl: './searchresultlist.component.html', styleUrls: ['./searchresultlist.component.css']})
export class SearchresultlistComponent implements OnInit {
  //@Input() searchResults : SearchResult[];
  searchResults : SearchResult[];

  showNotification:boolean = false;
  className: String;

  notificationMessage: String;

  safeURL:any;

  constructor(private route : ActivatedRoute, private _fetchResultService : FetchResultService) {
    
    

      
  }

  ngOnInit() {
    this
      .route
      .queryParams
      .subscribe(params => {
        
        if(!params.term)  return;
        this.searchSuggestion(params.term);
        this.className = 'alert-info';
      });

      
  }

  searchSuggestion(params) {
    this
      ._fetchResultService
      .fetchResult(params)
      .then(response => {
        this.searchResults = response;
        if(this.searchResults.length === 0) {
          this.showNotification = true;
          this.notificationMessage = 'Suggestions not found';
        }else {
          this.showNotification = false;
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

}