import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommandesComponent } from './admin-commandes.component';

describe('AdminCommandesComponent', () => {
  let component: AdminCommandesComponent;
  let fixture: ComponentFixture<AdminCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
