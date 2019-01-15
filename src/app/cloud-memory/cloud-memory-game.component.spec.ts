import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMemoryGameComponent } from './cloud-memory-game.component';

describe('CloudMemoryGameComponent', () => {
  let component: CloudMemoryGameComponent;
  let fixture: ComponentFixture<CloudMemoryGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudMemoryGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudMemoryGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
