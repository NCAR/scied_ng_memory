import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SciedFooterModule } from '../../core/modules/scied-footer/scied-footer.module';
import { MemoryModule } from '../../core/modules/memory/memory.module';
import { DataService } from '../../core/services/data/data.service';
import { MockDataService } from '../../core/services/data/data.service.mock';
import { WebappService } from '../../core/services/webapp/webapp.service';
import { MockWebappService } from '../../core/services/webapp/webapp.service.mock';
import { AcMemoryMenuComponent } from './ac-memory-menu.component';

describe('AcMemoryMenuComponent', () => {
  let component: AcMemoryMenuComponent;
  let fixture: ComponentFixture<AcMemoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SciedFooterModule,
        MemoryModule
      ],
      providers: [
        {
          provide: DataService,
          useClass: MockDataService
        },
        {
          provide: WebappService,
          useClass: MockWebappService
        }
      ],
      declarations: [ AcMemoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcMemoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
