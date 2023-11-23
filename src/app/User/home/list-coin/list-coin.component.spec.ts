import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoinComponent } from './list-coin.component';

describe('ListCoinComponent', () => {
  let component: ListCoinComponent;
  let fixture: ComponentFixture<ListCoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCoinComponent]
    });
    fixture = TestBed.createComponent(ListCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
