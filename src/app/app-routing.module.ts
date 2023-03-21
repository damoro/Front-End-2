import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/partials/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '' , component: HomepageComponent },
  { path: 'home' , component:HeaderComponent },
  { path: 'contact' , component: DashboardComponent },
  { path: 'help' , component: HeaderComponent },
  { path: 'login' , component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
