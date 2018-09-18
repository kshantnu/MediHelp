import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  textValue:String;

  constructor(
    private router: Router,private route : ActivatedRoute) { 
    
  }

  ngOnInit() {
    this
    .route
    .queryParams
    .subscribe(params => {
      this.textValue = params.term;
    });
  }
  onSearch(term) {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: { 'term': term },
    // };
    
    this.router.navigate(['suggestions'], { queryParams: { term },preserveFragment: true });
  }

  

}
