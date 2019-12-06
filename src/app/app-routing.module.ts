import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
import { UsersComponent } from './users/users.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RechercheparmotscleComponent } from './rechercheparmotscle/rechercheparmotscle.component';



const routes: Routes = [
{ path: 'Users/connexion',
  component: ConnexionComponent},

 {  path: 'categories',
    component: CategoriesComponent},

 { path: 'produits/:categorie',
   component: ProduitsComponent},

  { path: 'produits',
    component: ProduitsComponent},

  { path: 'users',
  	component:  UsersComponent},


    {path: 'recherche',
    component: RechercheComponent},

    {path: 'rechercheparmotscle',
     component: RechercheparmotscleComponent }
  	];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
