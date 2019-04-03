import { Component, OnInit, Input } from '@angular/core';
import { Produit } from 'src/app/interface/Produit';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  @Input() produit:Produit;
  
  constructor() { }

  ngOnInit() {
  }

}
