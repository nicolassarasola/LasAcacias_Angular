import { Component, Input, input } from '@angular/core';
import { Producto } from '../productos-list/producto';

@Component({
  selector: 'app-input-cantidad-unidades',
  standalone: false,
  templateUrl: './input-cantidad-unidades.html',
  styleUrl: './input-cantidad-unidades.scss'
})
export class InputCantidadUnidades {
 @Input() producto !: Producto;

  sumarCantidad(producto : Producto): void{
    if(producto.cantidad < producto.stock){
      producto.cantidad++;
    }    
  }

  restarCantidad(producto : Producto): void{
    if(producto.cantidad > 0){
      producto.cantidad--;
    } 
  }
  chequearCantidad(producto: Producto): void {
    
    if(producto.cantidad > producto.stock) {
      alert("limite de stock");
      producto.cantidad=0;
    }
    if(producto.cantidad < 0) {
      alert("limite inferior");
      producto.cantidad=0;
    }

}
}
