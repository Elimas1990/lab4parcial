import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltarepartidoresComponent } from './altarepartidores.component';

describe('AltarepartidoresComponent', () => {
  let component: AltarepartidoresComponent;
  let fixture: ComponentFixture<AltarepartidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltarepartidoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltarepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
