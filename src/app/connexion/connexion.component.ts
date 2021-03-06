import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
private utilisateur = {"email":"","password":""};
private message: string = "";




  constructor(private authService:  AuthentificationService,
  			  private router: Router ) { }



  onSubmit() {
  	this.authService.verificationConnexion(this.utilisateur).subscribe(reponse => {
       console.dir(reponse);
  	   this.message = reponse['message'];
      
  	   if (reponse['resultat']) {
  	       this.authService.connect(this.utilisateur.email);
  	       this.router.navigate(['/categories']);
  	   }
  	 setTimeout( () => {this.router.navigate(['/categories']); }, 1000);
  	});
  }

}
