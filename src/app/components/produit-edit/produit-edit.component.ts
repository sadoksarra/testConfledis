import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Produit } from './../../model/Produit';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  produitData: Produit[];
  

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateProduit();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getProduit(id);
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      prix_unitaire: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      
      quantite: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getProduit(id) {
    this.apiService.getProduit(id).subscribe(data => {
      this.editForm.setValue({
        nom: data['nom'],
        prix_unitaire: data['prix_unitaire'],
        quantite: data['quantite'],
        
      });
    });
  }

  updateProduit() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      prix_unitaire: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      
      quantite: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  onSubmit() {
    this.submitted = true;
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateProduit(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/produits-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }


