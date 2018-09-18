import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {PostSuggestionService} from './postsuggestion.service';


@Component({
  selector: 'app-submissionform',
  templateUrl: './submissionform.component.html',
  styleUrls: ['./submissionform.component.css']
})
export class SubmissionformComponent implements OnInit {
@Output() submissionClickEvent =  new EventEmitter();

suggestionForm: FormGroup;
symptoms: FormControl;
medicines: FormControl;
doctors: FormControl;
comments: FormControl;

showNotification:boolean = false;
className: String;
notificationMessage: String;

  constructor(private _postSuggestionService : PostSuggestionService) { 
    
  }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
  }
  createFormControls() {
    this.symptoms = new FormControl('',Validators.required);
    this.medicines = new FormControl('',Validators.required);
    this.doctors = new FormControl('');
    this.comments = new FormControl('');
  }
  createFormGroup() {
    this.suggestionForm = new FormGroup({
      symptoms: this.symptoms,
      medicines: this.medicines,
      doctors: this.doctors,
      comments: this.comments,
    });
  }

  submitSuggestion() {
    if(this.suggestionForm.valid) {
      console.log("form submitted", this.suggestionForm.value);
      this._postSuggestionService.submitSuggestion(this.suggestionForm.value).then(res => {
        this.showNotification = true;
        this.className = 'alert-success';
        this.notificationMessage = "suggestion was saved !!";
        this.suggestionForm.reset();
        this.submissionClickEvent.emit(res);
      }).catch(err => {
        console.log(err);
        this.showNotification = true;
        this.className = 'alert-danger';
        this.notificationMessage = "suggestion was NOT saved !!";
      });
    }
  }

  resetSubmissionForm() {
    this.suggestionForm.reset();
  }

  

}
