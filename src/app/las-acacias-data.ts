import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './productos-list/producto';
import { Observable, tap } from 'rxjs';
import { ProductosList } from './productos-list/productos-list';

const URL='https://687b17eeb4bc7cfbda84948a.mockapi.io/lasacacias/api/v1/Producto';

@Injectable({
  providedIn: 'root'
})
export class LasAcaciasData {

  constructor(private http: HttpClient) { }

  public getAll ():Observable<Producto[]>{
   return this.http.get<Producto[]>(URL)
   .pipe(
    tap((Productos:Producto[]) =>Productos.forEach(producto=>producto.cantidad=0))
   );
  }
}
 