import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcustomepipeComponent } from './testcustomepipe.component';

describe('TestcustomepipeComponent', () => {
  let component: TestcustomepipeComponent;
  let fixture: ComponentFixture<TestcustomepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcustomepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcustomepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
