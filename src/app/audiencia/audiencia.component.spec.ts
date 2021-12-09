import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienciaComponent } from './audiencia.component';

describe('AudienciaComponent', () => {
  let component: AudienciaComponent;
  let fixture: ComponentFixture<AudienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
