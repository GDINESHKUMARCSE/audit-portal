import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from "./material.module";
import {FormsModule} from "@angular/forms";
import {AuditQuestionsComponent} from "./component/audit-questions/audit-questions.component";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {AuditStatusComponent} from "./component/audit-status/audit-status.component";
import { WelcomeComponent } from "./component/welcome/welcome.component";
import { LogoutComponent } from "./component/logout/logout.component";

@NgModule({
  declarations: [

    AppComponent,
    WelcomeComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AuditQuestionsComponent,
    AuditStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
