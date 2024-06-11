import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReturnCartDto } from '../../models/cart/returnCart.dto';
import { environment } from '../../../../envinronment';
import { Observable } from 'rxjs';
import { ReturnCartProductDto } from '../../models/cart-product/returnCartProduct.dto';
import { AddToCart } from '../../models/cart/addToCart.dto';
import { RemoveToCart } from '../../models/cart/removeToCart.dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }

  getCart(): Observable<ReturnCartDto> {
    return this.http.get<ReturnCartDto>(`${environment.apiUrl}cart/get-cart`);
  }

  addProductToCart(addToCart: AddToCart): Observable<ReturnCartProductDto> {
    return this.http.post<ReturnCartProductDto>(`${environment.apiUrl}cart/add-to-cart`, addToCart);
  }

  removeProductToCart(removeToCart: RemoveToCart): Observable<ReturnCartProductDto> {
    return this.http.post<ReturnCartProductDto>(`${environment.apiUrl}cart/remove-to-cart`, removeToCart);
  }
}
