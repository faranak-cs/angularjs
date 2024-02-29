import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickedButtonComponent } from './clicked-button.component';

describe('ClickedButtonComponent', () => {
  let component: ClickedButtonComponent;
  let fixture: ComponentFixture<ClickedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickedButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
