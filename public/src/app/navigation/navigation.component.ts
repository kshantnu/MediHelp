import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormControl} from '@angular/forms';
//import {AutosuggestionDirective} from './autosuggestion.directive';
import {FetchResultService} from '../searchresultlist/fetchresult.service';
import {Observable, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({selector: 'app-navigation', templateUrl: './navigation.component.html', styleUrls: ['./navigation.component.css']})
export class NavigationComponent implements OnInit,
OnDestroy {
  textValue : String;
  searchSuggestionTextBox : FormControl;
  results : Object;
  formCtrlSub : Subscription;
  onKeyUp : Boolean = false;;
  suggestions : Boolean = false;;
  constructor(private router : Router, private route : ActivatedRoute, private _fetchResultService : FetchResultService) {}

  ngOnInit() {

    this.searchSuggestionTextBox = new FormControl;

    this
      .route
      .queryParams
      .subscribe(params => {
        const location = window
          .location
          .href
          .indexOf('?');
        if (location > -1) {
          const term = window
            .location
            .href
            .split('?')[1];
          if (term.indexOf('term=') > -1) {
            if (term) {
              const decodedQueryParam = term.split('=')[1];
              this.textValue = decodeURIComponent(decodedQueryParam);
            }

          }
        }
      });

    this.formCtrlSub = this
      .searchSuggestionTextBox
      .valueChanges
      .pipe(debounceTime(400), distinctUntilChanged(), switchMap((term : String) : Observable < Object > => {
        return this
          ._fetchResultService
          .fetchAutoSuggestions(term);
      }))
      .subscribe((results) => {
        this.onKeyUp = true;
        if (results && results['doctors'].length === 0 && results['medicines'].length === 0 && results['symptoms'].length === 0) {
          this.suggestions = false;
        } else {
          this.suggestions = true;
          this.results = results;
        }

      })
  }

  ngOnDestroy() {
    this
      .formCtrlSub
      .unsubscribe();
  }
  onSearch() {
    this
      .router
      .navigate(['suggestions'], {
        queryParams: {
          term: this.searchSuggestionTextBox.value
        },
        preserveFragment: true
      });
      this
      ._fetchResultService
      .resetSuggestions({hideAutoSugggestions: true});
      this.resetAutoSuggestion();
      this.closeNavigation();
  }

  fetchSuggestionsData(term) {

    this
      .searchSuggestionTextBox
      .setValue(term);
    this
      .router
      .navigate(['suggestions'], {
        queryParams: {
          term
        },
        preserveFragment: true
      });

    this.resetAutoSuggestion();
    this
      ._fetchResultService
      .resetSuggestions({hideAutoSugggestions: true});
  }

  resetAutoSuggestion() {
    this.onKeyUp = false;
    this.suggestions = false;
    this.results = [];
  }

  resetSuggestions() {
    if (!this.searchSuggestionTextBox.value.trim()) {
      this.resetAutoSuggestion();
    }
    this
      ._fetchResultService
      .resetSuggestions({hideAutoSugggestions: false});
      this.closeNavigation();
  }

  unfocusAutoSuggestion() {
    this
      ._fetchResultService
      .resetSuggestions({hideAutoSugggestions: true});
      this.resetAutoSuggestion();


  }

  closeNavigation(){
    $('.suggestion-autocomplete').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }

}