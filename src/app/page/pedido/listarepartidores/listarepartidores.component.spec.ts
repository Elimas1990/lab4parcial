import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarepartidoresComponent } from './listarepartidores.component';

describe('ListarepartidoresComponent', () => {
  let component: ListarepartidoresComponent;
  let fixture: ComponentFixture<ListarepartidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarepartidoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
