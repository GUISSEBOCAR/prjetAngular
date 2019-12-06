import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RechercheService } from '../recherche.service';



@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
private produits: Object [] = new Array(); // liste de produits a afficher
private subscribe: any;




  constructor(private research : RechercheService,
  			  private route : ActivatedRoute
  			  ) { }


  ngOnInit() {}

  rechercherPT(){

  this.route.params.subscribe((params: Params) =>{
  	let subroute = "";
 
  		subroute 
  			="criteria/"+params['type'];
  						
  		this.research.getProduits(subroute).subscribe(res => this.produits = res);


  });
  }


}
