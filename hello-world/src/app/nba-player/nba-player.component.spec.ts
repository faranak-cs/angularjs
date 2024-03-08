import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayerComponent } from './nba-player.component';

describe('NbaPlayerComponent', () => {
  let component: NbaPlayerComponent;
  let fixture: ComponentFixture<NbaPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
