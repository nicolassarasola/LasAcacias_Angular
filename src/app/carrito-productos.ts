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
//busca item que cumpla igualdad
    let item : Producto |undefined = this._listaDeCompra.find((v1) =>v1.id==producto.id)

      if(!item){
        //si no existe
        if(producto.cantidad!=0){
        this._listaDeCompra.push({ ... producto})
    
        this.listaDeCompra.next(this._listaDeCompra);
        }

    }else{
     
      item.cantidad+=producto.cantidad
    }
  }
}
