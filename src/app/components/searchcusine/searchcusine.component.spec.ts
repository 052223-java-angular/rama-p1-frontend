import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcusineComponent } from './searchcusine.component';

describe('SearchcusineComponent', () => {
  let component: SearchcusineComponent;
  let fixture: ComponentFixture<SearchcusineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchcusineComponent]
    });
    fixture = TestBed.createComponent(SearchcusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
