import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGetComponent } from './single-get.component';

describe('SingleGetComponent', () => {
  let component: SingleGetComponent;
  let fixture: ComponentFixture<SingleGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
