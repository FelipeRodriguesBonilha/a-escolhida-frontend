import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnUserDto } from '../../models/user/returnUser.dto';
import { environment } from '../../../../envinronment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(): Observable<ReturnUserDto> {
    return this.http.get<ReturnUserDto>(`${environment.apiUrl}user/get-user-by-id`);
  }
}
