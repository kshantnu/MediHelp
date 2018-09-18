import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-alert',
  templateUrl: './notification-alert.component.html',
  styleUrls: ['./notification-alert.component.css']
})
export class NotificationAlertComponent implements OnInit {
@Input() className: String;
@Input() notificationMessage: String;
  constructor() { }

  ngOnInit() {

  }

}
