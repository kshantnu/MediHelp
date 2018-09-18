import {Component, OnInit, Input} from '@angular/core';
import {SearchResult} from '../models/searchresult';

@Component({selector: 'app-searchresult', 
templateUrl: './searchresult.component.html', 
styleUrls: ['./searchresult.component.css']})

export class SearchresultComponent implements OnInit {
  @Input('suggestion') searchResult: SearchResult;
  
  constructor() {
    

  }

  ngOnInit() {
    console.log('askjdhjks', this.searchResult);
   
  }

}
