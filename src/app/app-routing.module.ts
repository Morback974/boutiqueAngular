import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutProduitComponent } from './layout/layout-produit/layout-produit.component';
import { LayoutPanierComponent } from './layout/layout-panier/layout-panier.component';
import { ProduitDetailPageComponent } from './page/produit/produit-detail-page/produit-detail-page.component';
import { ProduitListPageComponent } from './page/produit/produit-list-page/produit-list-page.component';
import { ProduitCreatePageComponent } from './page/produit/produit-create-page/produit-create-page.component';
import { ProduitUpdatePageComponent } from './page/produit/produit-update-page/produit-update-page.component';
import { PanierListPageComponent } from './page/panier/panier-list-page/panier-list-page.component';

const routes: Routes = [{
  path:'',
  redirectTo:'produit/list',
  pathMatch:'full'
},
{
  path:'produit',
  component:LayoutProduitComponent,
  children:[
    {
      path:'',
      redirectTo:'list',
      pathMatch:'full'
    },
    {
      path:'list',
      component:ProduitListPageComponent
    },
    {
      path:'create',
      component:ProduitCreatePageComponent
    },
    {
      path:'update/:id',
      component:ProduitUpdatePageComponent
    },
    {
      path:'read/:id',
      component:ProduitDetailPageComponent
    }
  ]
},
{
  path:'panier',
  component:LayoutPanierComponent,
  children:[
    {
      path:'',
      redirectTo:'list',
      pathMatch:'full'
    },
    {
      path:'list',
      component:PanierListPageComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
