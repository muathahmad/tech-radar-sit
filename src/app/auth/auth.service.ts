import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN_KEY= 'auth-token';
const AUTH_API = '';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
login(username:string, password:string){
  return this.http.post(AUTH_API + 'signin',{
    username,
    password
  }, httpOptions);
}
signOut():void{
  window.sessionStorage.clear();
}
saveToken(token: string){
  window.sessionStorage.removeItem(TOKEN_KEY);
  window.sessionStorage.setItem(TOKEN_KEY, token);
}

getToken(): string|null{
  return window.sessionStorage.getItem(TOKEN_KEY)
}
constructor(private http: HttpClient) {}


}

