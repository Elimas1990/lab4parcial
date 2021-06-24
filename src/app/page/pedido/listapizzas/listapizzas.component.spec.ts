import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapizzasComponent } from './listapizzas.component';

describe('ListapizzasComponent', () => {
  let component: ListapizzasComponent;
  let fixture: ComponentFixture<ListapizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
