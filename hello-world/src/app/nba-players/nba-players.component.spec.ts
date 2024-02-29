import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayersComponent } from './nba-players.component';

describe('NbaPlayersComponent', () => {
  let component: NbaPlayersComponent;
  let fixture: ComponentFixture<NbaPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaPlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbaPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
