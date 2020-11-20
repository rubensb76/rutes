import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallComponent } from './detall/detall.component';
import { Detall2Component } from './detall2/detall2.component';
import { LlistaComponent } from './llista/llista.component';

const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo:'/items'},
  {path: 'detall/:nomItem', component: DetallComponent},
  {path: 'detall2/:idItem', component: Detall2Component},
  {path: 'items', component: LlistaComponent},
  {path: '**', redirectTo:'/items'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
