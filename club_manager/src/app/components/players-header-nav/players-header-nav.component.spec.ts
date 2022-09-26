import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersHeaderNavComponent } from './players-header-nav.component';

describe('PlayersHeaderNavComponent', () => {
  let component: PlayersHeaderNavComponent;
  let fixture: ComponentFixture<PlayersHeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersHeaderNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
