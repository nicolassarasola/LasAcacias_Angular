import { Injectable } from '@angular/core';
import { Producto } from './productos-list/producto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoProductos {

  private _listaDeCompra : Producto[] =[];

  listaDeCompra : BehaviorSubject <Producto[]> = new BehaviorSubject(this._listaDeCompra);

  agregarAlCarro(producto: Producto) {

    if(producto.cantidad!=0){
    this._listaDeCompra.push({ ... producto})
    
    this.listaDeCompra.next(this._listaDeCompra);
    }

  }
}
