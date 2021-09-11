import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFileInputComponent } from './ng-file-input.component';

describe('NgFileInputComponent', () => {
  let component: NgFileInputComponent;
  let fixture: ComponentFixture<NgFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
