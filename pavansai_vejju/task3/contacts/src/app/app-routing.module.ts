import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcmpComponent } from './formcmp/formcmp.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"listform",component:FormcmpComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
