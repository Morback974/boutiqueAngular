import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/interface/Produit';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-produit-detail-page',
  templateUrl: './produit-detail-page.component.html',
  styleUrls: ['./produit-detail-page.component.css']
})
export class ProduitDetailPageComponent implements OnInit {
  produitToRead:Produit;

  constructor(private route:ActivatedRoute, private produitSrv:ProduitService) {
    let idProduit = this.route.snapshot.params.id;
    this.produitToRead = this.produitSrv.getProduitById(idProduit);
   }

  ngOnInit() {
  }

}
