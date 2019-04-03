import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interface/Produit';
import { ProduitService } from 'src/app/service/produit.service';
import { Router } from '@angular/router';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list-page.component.html',
  styleUrls: ['./produit-list-page.component.css']
})
export class ProduitListPageComponent implements OnInit {
  listProduit:Array<Produit>;

  constructor(
    private produitSrv:ProduitService, 
    private router:Router,
    private panierSrv:PanierService) {
    this.listProduit = this.produitSrv.getAll();
   }

  ngOnInit() {
  }

  wantToRead(id:number){
    this.router.navigate(['produit/read', id]);
  }

  wantToCreate(){
    this.router.navigateByUrl('produit/create');
  }

  wantToEdit(id){
    this.router.navigate(['produit/update', id]);
  }

  wantToAddPanier(tab){
    let produitToAdd = tab[0];
    let quantite = tab[1];
    
    if(quantite == ""){
      quantite = 1;
    }

    let produit = {...this.produitSrv.getProduitById(produitToAdd)};
    this.panierSrv.addProduit(produit, quantite);
  }
}
