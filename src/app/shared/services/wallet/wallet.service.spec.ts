import {TestBed} from '@angular/core/testing';

import {WalletService} from './wallet.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('WalletService', () => {
  let service: WalletService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })

    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
