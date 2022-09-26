import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubFinanceComponent } from './club-finance.component';

describe('ClubFinanceComponent', () => {
  let component: ClubFinanceComponent;
  let fixture: ComponentFixture<ClubFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
