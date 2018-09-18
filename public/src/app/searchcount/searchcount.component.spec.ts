import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcountComponent } from './searchcount.component';

describe('SearchcountComponent', () => {
  let component: SearchcountComponent;
  let fixture: ComponentFixture<SearchcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
