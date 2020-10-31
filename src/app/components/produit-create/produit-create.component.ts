import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit {

  submitted = false;
  produitForm: FormGroup;
 
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.produitForm = this.fb.group({
      nom: ['', [Validators.required]],
      prix_unitaire: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      quantite: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }




  // Getter to access form control
  get myForm(){
    return this.produitForm.controls;
  }

  onSubmit() {
       console.log('start');
      this.apiService.createProduit(this.produitForm.value).subscribe(
        (res) => {
          console.log('Produit crée avec succès!')
          this.ngZone.run(() => this.router.navigateByUrl('/produits-list'))
        }, (error) => {
          console.log(error);
        });
    }


  


}
