import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitUpdatePageComponent } from './produit-update-page.component';

describe('ProduitUpdatePageComponent', () => {
  let component: ProduitUpdatePageComponent;
  let fixture: ComponentFixture<ProduitUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
