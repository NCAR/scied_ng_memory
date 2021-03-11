import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WebappService } from './webapp.service';

describe('WebappService', () => {

  let service : WebappService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebappService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
  });
  beforeEach(() => {
    service = TestBed.get(WebappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
