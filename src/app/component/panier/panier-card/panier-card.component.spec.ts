import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierCardComponent } from './panier-card.component';

describe('PanierCardComponent', () => {
  let component: PanierCardComponent;
  let fixture: ComponentFixture<PanierCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
