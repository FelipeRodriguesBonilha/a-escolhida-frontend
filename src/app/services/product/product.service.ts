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

  getHighlights(): Observable<ReturnProductDto[]> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkX3VzZXIiOiI0Nzk4NjZkMS03YmViLTRhZTUtYjIzMC0yYzE4MDI3NzM2NzQiLCJyb2xlIjoxLCJpYXQiOjE3MTYwMTMwNDEsImV4cCI6MTcxNjYxNzg0MX0.EZyO1xtGlofXuxjwkuXFj90gPrqKUdQopcvJJUh0yKs'

    const headers = new HttpHeaders({
      'Authorization': `${token}`
    });
    
    return this.http.get<ReturnProductDto[]>(`${environment.apiUrl}product/get-highlights`, {headers});
  }

  likeProduct(uuid_product: string): Observable<ReturnProductDto[]> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkX3VzZXIiOiI0Nzk4NjZkMS03YmViLTRhZTUtYjIzMC0yYzE4MDI3NzM2NzQiLCJyb2xlIjoxLCJpYXQiOjE3MTYwMTMwNDEsImV4cCI6MTcxNjYxNzg0MX0.EZyO1xtGlofXuxjwkuXFj90gPrqKUdQopcvJJUh0yKs'

    const headers = new HttpHeaders({
      'Authorization': `${token}`
    });
    
    return this.http.patch<ReturnProductDto[]>(`${environment.apiUrl}product/like/${uuid_product}`, {}, {headers});
  }
}
