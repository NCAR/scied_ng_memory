import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../../services/data/data.service';
import { MockDataService } from '../../../services/data/data.service.mock';
import { WebappService } from '../../../services/webapp/webapp.service';
import { MockWebappService } from '../../../services/webapp/webapp.service.mock';
import { MemoryGameComponent } from './memory-game.component';
import { MemoryCardComponent } from '../memory-card/memory-card.component';
import { MemoryGameService } from '../memory-game.service';
import { MockMemoryGameService } from '../memory-game.service.mock';

describe('MemoryGameComponent', () => {
  let component: MemoryGameComponent;
  let fixture: ComponentFixture<MemoryGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
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
        },
        {
          provide: MemoryGameService,
          useClass: MockMemoryGameService
        }
      ],
      declarations: [MemoryGameComponent, MemoryCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryGameComponent);
    component = fixture.componentInstance;

    component.baseUrl = "/hao/apps/sun-memory";
    component.level = "level1";
    component.data = {
      "game": {
        "backImage": "/assets/apps/sun-memory/images/cards/cardback.png",
        "credits": {
          "text": "<p style='text-align: center;'><img src='/assets/images/scied_logo_500x55.png' width='500px'/></p><p>This interactive was created by the <strong>UCAR Center for Science Education</strong>.</p><p>Software design by <strong>Randy M. Russell</strong>, and <strong>Sharon Clark</strong>.<br/>Programming by <strong>Sharon Clark</strong>.</p><p>Educational design and text by <strong>Randy M. Russell</strong>.</p><p>&copy; 2012-2019 University Corporation for Atmospheric Research</p>"
        },
        "showPairsText": true,
        "showScore": true,
        "showContent": true,
        "showMessage": true,
        "showButtons": true,
        "resolution": "exhibit",
        "messages": {
          "click": "Please, select a card.",
          "one_more": "Pick one more card.",
          "miss": "Try again.",
          "match": "Good job!",
          "won": "You win! ",
          "buttonTextSelectLevel": "Select a Level",
          "buttonTextRestartLevel": "Restart",
          "buttonTextPlayAgain": "Play Again",
          "buttonTextQuit": "Quit",
          "buttonToggleAudioOn": "Turn Audio Off",
          "buttonToggleAudioOff": "Turn Audio On"
        },
        "levels": {
          "level1": {
            "title": "Easy Version"
          },
          "level2": {
            "title": "Medium Difficulty"
          }
        },
        "text": {
          "introduction": "Choose Game Difficulty Level",
          "instructions": "<p>Choose a difficulty level. Then click on the tiles (squares) to reveal pictures of different types of clouds. Try to match two pictures.</p>"
        },
        "screens": {
          "menu": {
            "class": [
              "sun_memory4"
            ]
          },
          "game": {
            "class": [
              "sun_memory1",
              "sun_memory2",
              "sun_memory3",
              "sun_memory5"
            ]
          }
        }
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    });
  });
});
