import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitListPageComponent } from './produit-list-page.component';

describe('ProduitListPageComponent', () => {
  let component: ProduitListPageComponent;
  let fixture: ComponentFixture<ProduitListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
