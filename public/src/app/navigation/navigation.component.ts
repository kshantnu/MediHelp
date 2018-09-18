import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  textValue:String;
  //query:String;
  constructor(
    private router: Router,private route : ActivatedRoute) { 
    // This workaround is because on intial pageload we wont receive query string
      
  }

  ngOnInit() {
    this
    .route
    .queryParams
    .subscribe(params => {
      const location = window.location.href.indexOf('?');
      if(location > -1) {
       const term = window.location.href.split('?')[1];
        if(term.indexOf('term=') > -1) {
          if(term){
           const decodedQueryParam = term.split('=')[1];
           this.textValue = decodeURIComponent(decodedQueryParam);
          }
          
        }
      }
    });
  }
  onSearch(term) {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: { 'term': term },
    // };
    
    this.router.navigate(['suggestions'], { queryParams: { term },preserveFragment: true });
  }

  

}
