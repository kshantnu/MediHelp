import { Component } from '@angular/core';
import {SearchResult} from './models/searchresult';
import {SuccessResult} from './models/successresult';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNotification:boolean;
  className: String;
  showForm:boolean = true;
  notificationMessage: String;
  searchResults: Array<SearchResult>;
  safeURL:any;
  constructor(private _sanitizer: DomSanitizer) {
    this.showNotification = false; 
    this.showForm = true; 
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1KT2asqA1J8');
  }

  searchEventOutput(list:Array<SearchResult>) {
    if(list && list.length === 0) {
      this.showForm = true;
      this.showNotification = true;
      this.notificationMessage = " Nor records found !! ";
      this.className = "alert-info";
    } else {
      this.showForm = false; 
      this.showNotification = false;
      this.searchResults = list;
    }
  }

  submissionEventOutput(res: SuccessResult){
    if(res._id) {
      this.showForm = true;
      this.showNotification = true;
      this.notificationMessage = " Suggestion successfully saved !! ";
      this.className = "alert-success";
    }
  }

  redirectBackToForm() {
    this.showForm = true;
    this.showNotification = false;
  }
}