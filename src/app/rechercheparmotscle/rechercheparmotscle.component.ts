import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RechercheService } from '../recherche.service';

@Component({
  selector: 'app-rechercheparmotscle',
  templateUrl: './rechercheparmotscle.component.html',
  styleUrls: ['./rechercheparmotscle.component.css']
})
export class RechercheparmotscleComponent implements OnInit {

private produits: Object [] = new Array(); // liste de produits a afficher
private subscribe: any;


  constructor( private research : RechercheService,
  			  private route : ActivatedRoute ) { }

  ngOnInit() {}

  rechercherParMc(){
   this.route.params.subscribe((params: Params) =>{
  	let subroute = "";

 		subroute = "keywords?"+params["terms"].split (" ").join("&");

  	
  		this.research.getProduits(subroute).subscribe(res => this.produits = res);


  });
  }
  }

