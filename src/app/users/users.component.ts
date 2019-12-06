import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

private newUser ={"nom":"","prenom":"", "email":"","password":"" };

public newUserForm: FormGroup;

  constructor( private authService:  AuthentificationService,
  			  private router: Router, private formBuilder: FormBuilder) { }
          message: string = "";

  ngOnInit() {

  this.newUserForm = this.formBuilder.group({
                  email: ['',{validators: [Validators.email],updateOn: 'blur'}],
                  prenom: ['', Validators.required],
                  nom: ['', Validators.required],
                  password: ['', {validators: [Validators.required, Validators.minLength(10)], updateOn: 'blur'}],
  })
  }

    ajout(){
               // alert(JSON.stringify(this.newUserForm.value));
                return this.authService.ajoutUtlisateur(this.newUserForm.value).subscribe(
                  reponse=>{this.message = reponse['message'];
                    console.log(reponse);
                    //alert(JSON.stringify(reponse));

                  }
                )
               }
  }


