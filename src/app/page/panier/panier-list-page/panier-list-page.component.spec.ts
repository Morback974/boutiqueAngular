import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierListPageComponent } from './panier-list-page.component';

describe('PanierListPageComponent', () => {
  let component: PanierListPageComponent;
  let fixture: ComponentFixture<PanierListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
