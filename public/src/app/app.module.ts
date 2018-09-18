import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { SubmissionformComponent } from './submissionform/submissionform.component';
import { SearchresultlistComponent } from './searchresultlist/searchresultlist.component';
import { NotificationAlertComponent } from './common_components/notification-alert/notification-alert.component';
import { HttpClientModule }    from '@angular/common/http';
//import { FetchResultService } from './searchbar/fetchresult.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    SearchresultComponent,
    SubmissionformComponent,
    SearchresultlistComponent,
    NotificationAlertComponent,
    NavigationComponent,
    HeaderComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
