import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlquilerComponent } from './list-alquiler.component';

describe('ListAlquilerComponent', () => {
  let component: ListAlquilerComponent;
  let fixture: ComponentFixture<ListAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
