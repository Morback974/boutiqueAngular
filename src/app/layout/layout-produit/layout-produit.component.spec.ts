import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProduitComponent } from './layout-produit.component';

describe('LayoutProduitComponent', () => {
  let component: LayoutProduitComponent;
  let fixture: ComponentFixture<LayoutProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
