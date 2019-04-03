import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interface/Produit';
import { ProduitService } from 'src/app/service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create-page.component.html',
  styleUrls: ['./produit-create-page.component.css']
})
export class ProduitCreatePageComponent implements OnInit {

  constructor(private produitSrv:ProduitService, private router:Router) { }

  ngOnInit() {
  }

  saveProduit(newProduit:Produit){
    this.produitSrv.addProduit(newProduit);

    this.router.navigateByUrl('produit');
  }
}
