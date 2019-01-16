import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunMemoryGameComponent } from './sun-memory-game.component';

describe('SunMemoryGameComponent', () => {
  let component: SunMemoryGameComponent;
  let fixture: ComponentFixture<SunMemoryGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunMemoryGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunMemoryGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
