import { Injectable } from '@angular/core';
import { Produit } from '../interface/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  listProduit:Array<Produit> = [{
    id:1,
    libelle:"Telephone",
    description:"Appeler les gens",
    prix:250
  },
  {
    id:2,
    libelle:"Souris",
    description:"Ne pas manger",
    prix:60
  },
  {
    id:3,
    libelle:"Jus",
    description:"Un peu gazeux",
    prix:2.30
  }
];

  constructor() { }

  getAll(){
    return this.listProduit;
  }

  getProduitById(selectId:number):Produit{
    return this.listProduit.find(({id}) => selectId == id);
  }

  addProduit(newProduit:Produit){
    let tailleList = this.listProduit.length; // taille liste Produit
    let id = this.listProduit[tailleList - 1].id + 1; // recup l'id + 1

    this.listProduit.push({id, ...newProduit});
  }

  updateProduit(newProduit:Produit, idOldProduit:number){
    let indexProduit = this.listProduit.findIndex(({id}) => idOldProduit == id);
    
    if(indexProduit !== -1){
      this.listProduit[indexProduit] = {...this.listProduit[indexProduit], ...newProduit};
    }
  }
}
