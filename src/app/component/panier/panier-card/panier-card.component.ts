import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from 'src/app/interface/Produit';

@Component({
  selector: 'app-panier-card',
  templateUrl: './panier-card.component.html',
  styleUrls: ['./panier-card.component.css']
})
export class PanierCardComponent implements OnInit {
  @Input() produit:Produit;

  @Output() deleteEvent:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  wantToDelete(){
    this.deleteEvent.emit(this.produit.id);
  }
}
