import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTecnologyGameComponent } from './create-tecnology-game.component';

describe('CreateTecnologyGameComponent', () => {
  let component: CreateTecnologyGameComponent;
  let fixture: ComponentFixture<CreateTecnologyGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTecnologyGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTecnologyGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
