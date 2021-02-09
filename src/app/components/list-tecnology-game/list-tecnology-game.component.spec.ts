import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTecnologyGameComponent } from './list-tecnology-game.component';

describe('ListTecnologyGameComponent', () => {
  let component: ListTecnologyGameComponent;
  let fixture: ComponentFixture<ListTecnologyGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTecnologyGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTecnologyGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
