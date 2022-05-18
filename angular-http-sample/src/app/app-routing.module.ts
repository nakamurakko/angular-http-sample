import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MultipleHttpSampleComponent } from './multiple-http-sample/multiple-http-sample.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'multiple-http-sample', component: MultipleHttpSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
