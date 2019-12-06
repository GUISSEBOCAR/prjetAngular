import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { map, filter, switchMap } from 'rxjs/operators';

import { AppRoutingModule } from './app-routing.module';
import { AuthentificationService } from './authentification.service';
import { ProduitsService } from './produits.service'

import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CategoriesComponent } from './categories/categories.component';

import { UsersComponent } from './users/users.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RechercheparmotscleComponent } from './rechercheparmotscle/rechercheparmotscle.component';
import { RechComponent } from './rech/rech.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    MenuComponent,
    ConnexionComponent,
    CategoriesComponent,

    UsersComponent,
    RechercheComponent,
  
    RechercheparmotscleComponent,
  
    RechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 


  ],
  providers: [AuthentificationService, ProduitsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
