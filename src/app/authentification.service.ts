import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';



const httpOptions = {
	headers: new HttpHeaders({
		"Access-Control-Allow-Methods": "GET, POST",
		"Access-Control-Allow-Headers": "Content-type",
		"Content-type": "application/json",
		"Access-Control-Allow-Origin": "*"
	})
};

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
	private user:Subject<string> = new BehaviorSubject<string>(undefined);
	private baseURL: string ="http://localhost:8888/"; 

  constructor(private http: HttpClient) { }
  getUser() { return this.user; }
  connect(data: string) { this.user.next(data); }

  disconnect() { this.user.next(null); }
   verificationConnexion(identifiants) : Observable<any> {
       return this.http.post(this.baseURL+'Users/connexion',
   						 JSON.stringify(identifiants), httpOptions);
   }

    ajoutUtlisateur (data:any): Observable<any> {
      return this.http.post(this.baseURL+'Users', JSON.stringify(data),httpOptions);
}
}
