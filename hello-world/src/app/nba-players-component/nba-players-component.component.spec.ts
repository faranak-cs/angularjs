import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayersComponentComponent } from './nba-players-component.component';

describe('NbaPlayersComponentComponent', () => {
  let component: NbaPlayersComponentComponent;
  let fixture: ComponentFixture<NbaPlayersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaPlayersComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbaPlayersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
