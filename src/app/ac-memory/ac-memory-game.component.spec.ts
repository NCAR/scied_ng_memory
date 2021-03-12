import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SciedFooterModule } from '../../core/modules/scied-footer/scied-footer.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../core/services/data/data.service';
import { MockDataService } from '../../core/services/data/data.service.mock';
import { WebappService } from '../../core/services/webapp/webapp.service';
import { MockWebappService } from '../../core/services/webapp/webapp.service.mock';
import { MemoryModule } from '../../core/modules/memory/memory.module';
import { AcMemoryGameComponent } from './ac-memory-game.component';

describe('AcMemoryGameComponent', () => {
  let component: AcMemoryGameComponent;
  let fixture: ComponentFixture<AcMemoryGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SciedFooterModule,
        MemoryModule,
        RouterTestingModule
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
      declarations: [ AcMemoryGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcMemoryGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
