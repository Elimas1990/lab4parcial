import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapartidordetalleComponent } from './rapartidordetalle.component';

describe('RapartidordetalleComponent', () => {
  let component: RapartidordetalleComponent;
  let fixture: ComponentFixture<RapartidordetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapartidordetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapartidordetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
