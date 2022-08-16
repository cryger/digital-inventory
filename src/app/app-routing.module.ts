import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecuperacuentaComponent } from './auth/recuperacuenta/recuperacuenta.component';

//routes for control for redirect and principal routes for dashboard
const routes:Routes=[
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'recuperacuenta', component:RecuperacuentaComponent},
  {path: '**',component:NopageFoundComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //import all routes
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
