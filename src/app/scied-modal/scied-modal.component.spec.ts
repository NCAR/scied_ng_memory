import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciedModalComponent } from './scied-modal.component';

describe('SciedModalComponent', () => {
  let component: SciedModalComponent;
  let fixture: ComponentFixture<SciedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
