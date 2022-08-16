import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecuperacuentaComponent } from './recuperacuenta/recuperacuenta.component';

const routes:Routes=[

  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'recuperacuenta', component: RecuperacuentaComponent}

]

@NgModule({
  declarations: [],
  //importacion de todos los modulos que se necesitaran
  imports: [
    CommonModule,
    //guardo el recorrido de las rutas principales
    RouterModule.forRoot(routes)
  ],
  //exporto las rutas del modlo de rutas
  exports:[RouterModule]
})
export class AuthRoutingModule { }
