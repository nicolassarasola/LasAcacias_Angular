import { Component } from '@angular/core';
import { Producto } from './producto';
import { CarritoProductos } from '../carrito-productos';
import { LasAcaciasData } from '../las-acacias-data';

@Component({
  selector: 'app-productos-list',
  standalone: false,
  templateUrl: './productos-list.html',
  styleUrl: './productos-list.scss'
})
export class ProductosList {
  


  constructor(
    private carrito : CarritoProductos,
    private productosData : LasAcaciasData 
  ){
  }

  productos : Producto [] =[]

  ngOnInit(): void{
    this.productosData.getAll().subscribe(productos => this.productos = productos);
  }
agregarAlCarro(producto:Producto):void{

  this.carrito.agregarAlCarro(producto)
  producto.stock-=producto.cantidad;
  producto.cantidad=0
}

}
