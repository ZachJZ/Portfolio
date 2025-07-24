import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
export const routes: Routes = [

    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), 
        CommonModule, LayoutModule
        
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }