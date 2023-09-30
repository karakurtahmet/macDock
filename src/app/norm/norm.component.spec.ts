import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormComponent } from './norm.component';

describe('NormComponent', () => {
  let component: NormComponent;
  let fixture: ComponentFixture<NormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormComponent]
    });
    fixture = TestBed.createComponent(NormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
