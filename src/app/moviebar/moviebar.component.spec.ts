import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviebarComponent } from './moviebar.component';

describe('MoviebarComponent', () => {
  let component: MoviebarComponent;
  let fixture: ComponentFixture<MoviebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
