import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfavoritesComponent } from './myfavorites.component';

describe('MyfavoritesComponent', () => {
  let component: MyfavoritesComponent;
  let fixture: ComponentFixture<MyfavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyfavoritesComponent]
    });
    fixture = TestBed.createComponent(MyfavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
