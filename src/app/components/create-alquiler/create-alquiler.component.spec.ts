import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlquilerComponent } from './create-alquiler.component';

describe('CreateAlquilerComponent', () => {
  let component: CreateAlquilerComponent;
  let fixture: ComponentFixture<CreateAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
