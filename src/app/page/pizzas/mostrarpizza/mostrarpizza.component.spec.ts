import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarpizzaComponent } from './mostrarpizza.component';

describe('MostrarpizzaComponent', () => {
  let component: MostrarpizzaComponent;
  let fixture: ComponentFixture<MostrarpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
