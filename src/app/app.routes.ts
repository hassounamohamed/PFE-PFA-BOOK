import { Routes } from '@angular/router';
import { HelppComponent } from './helpp/helpp.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component:HomeComponent },
    {path:'help', component:HelppComponent}
    
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}