import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductosList } from './productos-list/productos-list';

import { FormsModule } from '@angular/forms';
import { LasAcaciasAbout } from './las-acacias-about/las-acacias-about';
import { LasAcaciasProductos } from './las-acacias-productos/las-acacias-productos';
import { LasAcaciasCarrito } from './las-acacias-carrito/las-acacias-carrito';
import { InputCantidadUnidades } from './input-cantidad-unidades/input-cantidad-unidades';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    App,
    ProductosList,
    LasAcaciasAbout,
    LasAcaciasProductos,
    LasAcaciasCarrito,
    InputCantidadUnidades
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
