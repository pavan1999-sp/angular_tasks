import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaperComponent } from './paper/paper.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [{path:"",component:TermsComponent},{path:"paper",component:PaperComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
