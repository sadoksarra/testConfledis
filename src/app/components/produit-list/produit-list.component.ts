import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
 
  searchedKeyword:string;

  Produit:any = [];

  constructor(private apiService: ApiService) { 
    this.readProduit();
  }

  ngOnInit() {}

  readProduit(){
    this.apiService.getProduits().subscribe((data) => {
     this.Produit = data;
    })    
  }

  removeProduit(produit, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteProduit(produit._id).subscribe((data) => {
          this.Produit.splice(index, 1);
        }
      )    
    }
  }


}
