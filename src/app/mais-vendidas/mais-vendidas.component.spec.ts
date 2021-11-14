import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisVendidasComponent } from './mais-vendidas.component';

describe('MaisVendidasComponent', () => {
  let component: MaisVendidasComponent;
  let fixture: ComponentFixture<MaisVendidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisVendidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisVendidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
