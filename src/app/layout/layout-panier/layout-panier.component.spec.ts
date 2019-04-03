import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPanierComponent } from './layout-panier.component';

describe('LayoutPanierComponent', () => {
  let component: LayoutPanierComponent;
  let fixture: ComponentFixture<LayoutPanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
