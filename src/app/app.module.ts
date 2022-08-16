import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    HttpClientModule,
    AgGridModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
