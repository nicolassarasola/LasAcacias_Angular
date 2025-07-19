import { Component } from '@angular/core';
import { CarritoProductos } from '../carrito-productos';
import { Producto } from '../productos-list/producto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-las-acacias-carrito',
  standalone: false,
  templateUrl: './las-acacias-carrito.html',
  styleUrl: './las-acacias-carrito.scss'
})
export class LasAcaciasCarrito {
  listaDeCompra$ : Observable<Producto[]>;

  constructor(private carrito : CarritoProductos){
   this.listaDeCompra$ = carrito.listaDeCompra.asObservable();
  }


}
