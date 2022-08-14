import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';



const APP_ROUTES: Routes = [


   { path:'mainpage' , component  : MainpageComponent},
   { path:'pagetwo'  , component  : PagetwoComponent},
   { path: '**'      , pathMatch  : 'full', redirectTo: 'mainpage' }


];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
