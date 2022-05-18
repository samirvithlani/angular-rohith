import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterdemoComponent } from './routerdemo.component';

describe('RouterdemoComponent', () => {
  let component: RouterdemoComponent;
  let fixture: ComponentFixture<RouterdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
