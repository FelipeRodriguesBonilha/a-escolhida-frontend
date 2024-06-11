import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReturnCepDto } from '../../models/correios/returnCep.dto';
import { environment } from '../../../../envinronment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreiosService {

  constructor(private http: HttpClient) {}

  getAddressByCep(cep: string): Observable<ReturnCepDto> {
    return this.http.get<ReturnCepDto>(`${environment.apiUrl}correios/get-by-cep/${cep}`);
  }
}
