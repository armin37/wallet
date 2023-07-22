import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WordsComponent} from './words.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {WalletService} from "../../../services/wallet/wallet.service";

describe('WordsComponent', () => {
  let component: WordsComponent;
  let fixture: ComponentFixture<WordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [WordsComponent],
      providers: [WalletService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
