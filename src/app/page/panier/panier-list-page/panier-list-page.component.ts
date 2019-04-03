import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/service/panier.service';
import { Produit } from 'src/app/interface/Produit';

@Component({
  selector: 'app-panier-list',
  templateUrl: './panier-list-page.component.html',
  styleUrls: ['./panier-list-page.component.css']
})
export class PanierListPageComponent implements OnInit {
  listProduit:Array<Produit>= [];

  constructor(private panierSrv:PanierService) {
    this.listProduit = this.panierSrv.getAll();
   }

  ngOnInit() {
  }

  wantToDelete(id:number){
    this.panierSrv.deleteIdProduit(id);
  }
}
