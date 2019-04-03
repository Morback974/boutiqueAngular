import { Injectable } from '@angular/core';
import { Produit } from '../interface/Produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  listProduit:Array<Produit> = [];

  constructor() { }

  getAll(){
    return this.listProduit;
  }

  addProduit(newProduit:Produit, quantite:number){
    let produit:Produit = {...newProduit, quantite};
    let indexProduit = this.listProduit.findIndex(({id}) => produit.id == id);

    if(indexProduit == -1){
      this.listProduit.push(produit);
    }else{
      this.listProduit[indexProduit].quantite += produit.quantite; 
    }
  }

  deleteIdProduit(deleteId:number){
    let indexId = this.listProduit.findIndex(({id}) => id == deleteId);

    if(indexId !== -1){
      this.listProduit.splice(indexId, 1);
    }
  }
}
