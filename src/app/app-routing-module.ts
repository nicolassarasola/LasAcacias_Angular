import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LasAcaciasAbout } from './las-acacias-about/las-acacias-about';
import { LasAcaciasProductos } from './las-acacias-productos/las-acacias-productos';

const routes: Routes = [
  
  {
    path : '',
    redirectTo : 'productos',
    pathMatch: 'full'
  },

  {
    path : 'productos',
    component : LasAcaciasProductos
  },
  
  {
    path : 'about',
    component : LasAcaciasAbout
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
