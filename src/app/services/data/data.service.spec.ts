import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';
import { DataService } from './data.service';

describe('DataService', () => {
  let service : DataService;
  let backend : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports: [HttpClientTestingModule]
    });
    // HttpClientTestingModule - Extended interactions between a data service and the HttpClient can be complex
    // and difficult to mock with spies.
   //  The HttpClientTestingModule can make these testing scenarios more manageable.
  });
  beforeEach(() => {
    service = TestBed.get(DataService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
      expect(service).toBeTruthy();
    });

});
