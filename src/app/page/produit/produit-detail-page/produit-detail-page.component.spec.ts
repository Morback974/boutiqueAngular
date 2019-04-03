import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDetailPageComponent } from './produit-detail-page.component';

describe('ProduitDetailPageComponent', () => {
  let component: ProduitDetailPageComponent;
  let fixture: ComponentFixture<ProduitDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
