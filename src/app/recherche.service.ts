import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';



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
export class RechercheService {


constructor(private http: HttpClient) { }



	getProduits(parametres: string) : Observable<any> {
	let url : string = "http://localhost:8888/produits/"+parametres;
	let observable: Observable<any>= this.http.get(url).pipe(map((res:Response) => res.json()));
					return observable;}




  
}
