import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModpizzaComponent } from './modpizza.component';

describe('ModpizzaComponent', () => {
  let component: ModpizzaComponent;
  let fixture: ComponentFixture<ModpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
