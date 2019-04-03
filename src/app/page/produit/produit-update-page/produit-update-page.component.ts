import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/service/produit.service';
import { Produit } from 'src/app/interface/Produit';

@Component({
  selector: 'app-produit-update',
  templateUrl: './produit-update-page.component.html',
  styleUrls: ['./produit-update-page.component.css']
})
export class ProduitUpdatePageComponent implements OnInit {
  produitToUpdate:Produit;

  constructor(private route:ActivatedRoute, private produitSrv:ProduitService, private router:Router) {
    let idProduitToUpdate = this.route.snapshot.params.id;
    this.produitToUpdate = this.produitSrv.getProduitById(idProduitToUpdate);
  }

  ngOnInit() {
  }

  updateProduit(newProduit:Produit){
    this.produitSrv.updateProduit(newProduit, this.produitToUpdate.id);
    this.router.navigateByUrl('produit')
  }
}
