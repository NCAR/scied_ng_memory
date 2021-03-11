import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { SciedModalModule } from '../../scied-modal/scied-modal.module';
import { RouterTestingModule } from '@angular/router/testing';
import { WebappService } from '../../../services/webapp/webapp.service';
import { MockWebappService } from '../../../services/webapp/webapp.service.mock';
import { MemoryMenuComponent } from './memory-menu.component';

describe('MemoryMenuComponent', () => {
  let component: MemoryMenuComponent;
  let fixture: ComponentFixture<MemoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatGridListModule,
        SciedModalModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: WebappService,
          useClass: MockWebappService
        }
      ],
      declarations: [ MemoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryMenuComponent);
    component = fixture.componentInstance;
    component.data = {};
    component.baseUrl = "";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
