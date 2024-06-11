import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../envinronment';
import { ReturnProductDto } from '../../models/product/returnProduct.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ReturnProductDto[]> {
    return this.http.get<ReturnProductDto[]>(`${environment.apiUrl}product/get-all`);
  }

  getHighlights(): Observable<ReturnProductDto[]> {
    return this.http.get<ReturnProductDto[]>(`${environment.apiUrl}product/get-highlights`);
  }

  likeProduct(uuid_product: string): Observable<ReturnProductDto[]> {
    return this.http.patch<ReturnProductDto[]>(`${environment.apiUrl}product/like/${uuid_product}`, {});
  }
}
