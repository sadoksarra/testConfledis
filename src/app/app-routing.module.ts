import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitCreateComponent } from './components/produit-create/produit-create.component';
import { ProduitEditComponent } from './components/produit-edit/produit-edit.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create-produit', component: ProduitCreateComponent },
  { path: 'edit-produit/:id', component: ProduitEditComponent },
  { path: 'produits-list', component: ProduitListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
