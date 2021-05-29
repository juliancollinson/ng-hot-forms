import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHotFormsComponent } from './ng-hot-forms.component';

describe('NgHotFormsComponent', () => {
  let component: NgHotFormsComponent;
  let fixture: ComponentFixture<NgHotFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgHotFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHotFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
