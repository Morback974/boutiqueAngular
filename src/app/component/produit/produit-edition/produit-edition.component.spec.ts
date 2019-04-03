import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitEditionComponent } from './produit-edition.component';

describe('ProduitEditionComponent', () => {
  let component: ProduitEditionComponent;
  let fixture: ComponentFixture<ProduitEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
