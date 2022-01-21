import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicRankComponent } from './clinic-rank.component';

describe('ClinicRankComponent', () => {
  let component: ClinicRankComponent;
  let fixture: ComponentFixture<ClinicRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicRankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
