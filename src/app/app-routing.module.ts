import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {HomeComponent} from "./component/home/home.component";
import {AuditQuestionsComponent} from "./component/audit-questions/audit-questions.component";
import {AuditStatusComponent} from "./component/audit-status/audit-status.component";
import {WelcomeComponent} from "./component/welcome/welcome.component";
import {LogoutComponent} from "./component/logout/logout.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'questions', component: AuditQuestionsComponent},
  {path: 'audit-status', component: AuditStatusComponent},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
