import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMostSearchComponent } from './service-most-search.component';

describe('ServiceMostSearchComponent', () => {
  let component: ServiceMostSearchComponent;
  let fixture: ComponentFixture<ServiceMostSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceMostSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMostSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
