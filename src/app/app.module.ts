import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule}   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutProduitComponent } from './layout/layout-produit/layout-produit.component';
import { LayoutPanierComponent } from './layout/layout-panier/layout-panier.component';
import { ProduitCardComponent } from './component/produit/produit-card/produit-card.component';
import { PanierCardComponent } from './component/panier/panier-card/panier-card.component';
import { ProduitEditionComponent } from './component/produit/produit-edition/produit-edition.component';
import { ProduitDetailComponent } from './component/produit/produit-detail/produit-detail.component';
import { ProduitDetailPageComponent } from './page/produit/produit-detail-page/produit-detail-page.component';
import { ProduitCreatePageComponent } from './page/produit/produit-create-page/produit-create-page.component';
import { ProduitUpdatePageComponent } from './page/produit/produit-update-page/produit-update-page.component';
import { PanierListPageComponent } from './page/panier/panier-list-page/panier-list-page.component';
import { ProduitListPageComponent } from './page/produit/produit-list-page/produit-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutProduitComponent,
    LayoutPanierComponent,
    ProduitCardComponent,
    PanierCardComponent,
    ProduitEditionComponent,
    ProduitDetailComponent,
    ProduitDetailPageComponent,
    ProduitCreatePageComponent,
    ProduitUpdatePageComponent,
    PanierListPageComponent,
    ProduitListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
