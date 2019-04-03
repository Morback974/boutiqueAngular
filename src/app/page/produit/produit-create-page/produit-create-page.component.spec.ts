import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCreatePageComponent } from './produit-create-page.component';

describe('ProduitCreatePageComponent', () => {
  let component: ProduitCreatePageComponent;
  let fixture: ComponentFixture<ProduitCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
