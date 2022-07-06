import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsUIComponent } from './sports-ui.component';

describe('SportsUIComponent', () => {
  let component: SportsUIComponent;
  let fixture: ComponentFixture<SportsUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
