import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {SearchresultlistComponent} from './searchresultlist/searchresultlist.component';
import {SubmissionformComponent} from './submissionform/submissionform.component';
import {AboutMeComponent} from './about-me/about-me.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HeaderComponent},
  {path: 'suggestions', component: SearchresultlistComponent},
  {path: 'suggestions?term=', component: SearchresultlistComponent},
  {path: 'suggestionform', component: SubmissionformComponent},
  {path: 'aboutme', component: AboutMeComponent},
  {path: '**', component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
