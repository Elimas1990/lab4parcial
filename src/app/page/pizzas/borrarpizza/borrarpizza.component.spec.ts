import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarpizzaComponent } from './borrarpizza.component';

describe('BorrarpizzaComponent', () => {
  let component: BorrarpizzaComponent;
  let fixture: ComponentFixture<BorrarpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
