import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatallePeliculaComponent } from './datalle-pelicula.component';

describe('DatallePeliculaComponent', () => {
  let component: DatallePeliculaComponent;
  let fixture: ComponentFixture<DatallePeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatallePeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatallePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
