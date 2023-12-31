import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPresenceComponent } from './our-presence.component';

describe('OurApproachComponent', () => {
  let component: OurPresenceComponent;
  let fixture: ComponentFixture<OurPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPresenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
