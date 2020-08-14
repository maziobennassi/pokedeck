import { TestBed } from '@angular/core/testing';

import { LoaderService } from '../services/loader.service';
import { LoaderInterceptor } from './loader-interceptor.service';

describe('LoaderInterceptorService', () => {
  let service: LoaderInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: LoaderService , useClass: LoaderService },
        {provide: LoaderInterceptor , useClass: LoaderInterceptor }
      ]
    });
    service = TestBed.inject(LoaderInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
