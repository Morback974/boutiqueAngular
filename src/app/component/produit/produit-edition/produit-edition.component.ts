import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Produit } from 'src/app/interface/Produit';

@Component({
  selector: 'app-produit-edition',
  templateUrl: './produit-edition.component.html',
  styleUrls: ['./produit-edition.component.css']
})
export class ProduitEditionComponent implements OnInit {
  @Input() produitToUpdate:Produit;
  @Output() saveEvent:EventEmitter<Produit> = new EventEmitter<Produit>();

  produitForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.produitForm = this.fb.group(
      {
        libelle: [''],
        description: [''],
        prix: ['']
      }
    );

    if(this.produitToUpdate){
      this.patchForm();
    }
  }

  patchForm(){
    this.produitForm.patchValue(this.produitToUpdate);
  }

  wantToSave(){
    this.saveEvent.emit(this.produitForm.value);
  }

}
