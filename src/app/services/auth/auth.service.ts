import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnLoginDto } from '../../models/auth/returnLogin.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../envinronment';
import { LoginDto } from '../../models/auth/login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(loginDto: LoginDto): Observable<ReturnLoginDto> {
    return this.http.post<ReturnLoginDto>(`${environment.apiUrl}auth/login`, loginDto);
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }

  verifyTokenIsValid(): Boolean {
    return true;
  }
}
