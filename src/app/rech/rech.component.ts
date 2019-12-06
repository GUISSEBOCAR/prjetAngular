import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rech',
  templateUrl: './rech.component.html',
  styleUrls: ['./rech.component.css']
})
export class RechComponent implements OnInit {

private produits: Object[];

  constructor(private http: HttpClient) { }
  nomBienP: String= '';
  reponse: any;
  description: any;
  proprietaire: any;
  nom: any;

  ngOnInit() {
  }

   chercher(){

    const Re = this.http.get('http://localhost:8888/produits/' + this.nomBienP);
    Re.subscribe((reponse) => {
      this.reponse = reponse;
      console.log(reponse);
    });
    
  }

}

