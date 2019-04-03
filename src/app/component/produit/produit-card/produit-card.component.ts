import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from 'src/app/interface/Produit';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrls: ['./produit-card.component.css']
})
export class ProduitCardComponent implements OnInit {
  @Input() produit:Produit;

  @Output() editEvent:EventEmitter<number> = new EventEmitter<number>();
  @Output() addPanierEvent:EventEmitter<Array<number>> = new EventEmitter<Array<number>>();
  @Output() detailEvent:EventEmitter<number> = new EventEmitter<number>();

  quantiteNameControl:FormControl;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.initControlName();
  }

  initControlName(){
    this.quantiteNameControl = this.fb.control('');
  }

  wantDetail(){
    this.detailEvent.emit(this.produit.id);
  }

  wantToEdit(){
    this.editEvent.emit(this.produit.id);
  }

  wantToAddPanier(){
    this.addPanierEvent.emit([this.produit.id, this.quantiteNameControl.value]);
  }
}
