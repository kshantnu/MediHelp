import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { SubmissionformComponent } from './submissionform/submissionform.component';
import { SearchresultlistComponent } from './searchresultlist/searchresultlist.component';
import { NotificationAlertComponent } from './common_components/notification-alert/notification-alert.component';
import { HttpClientModule }    from '@angular/common/http';
import { SearchcountComponent } from './searchcount/searchcount.component'; 
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { AutosuggestionDirective } from './navigation/autosuggestion.directive';
import { CommaseperatorPipe } from './navigation/commaseperator.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    SearchresultComponent,
    SubmissionformComponent,
    SearchresultlistComponent,
    NotificationAlertComponent,
    SearchcountComponent,
    NavigationComponent,
    HeaderComponent,
    AboutMeComponent,
    AutosuggestionDirective,
    CommaseperatorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
