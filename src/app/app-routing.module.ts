import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllatainkComponent } from './allataink/allataink.component';
import { NyitoOldalComponent } from './nyito-oldal/nyito-oldal.component';
import { UjLakokComponent } from './uj-lakok/uj-lakok.component';

const routes: Routes = [
  {path: '', component: NyitoOldalComponent},
  {path: 'allataink', component: AllatainkComponent},
  {path: 'uj-lakok', component: UjLakokComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
