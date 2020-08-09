import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutComponent } from './about/about/about.component';
import { JavaComponent } from './java/java.component';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    JavaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'bio', component:AboutComponent},
      {path: 'home', component:HomeComponent}
    ]),
    NgbModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
