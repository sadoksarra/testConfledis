import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProduitCreateComponent } from './components/produit-create/produit-create.component';
import { ProduitEditComponent } from './components/produit-edit/produit-edit.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProduitCreateComponent,
    ProduitEditComponent,
    ProduitListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
