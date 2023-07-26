import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../http/http.service";
import TonWeb from "tonweb";
import {Address, TonClient, fromNano} from "ton";
import {WalletContractV4} from "ton";
import {mnemonicToWalletKey} from "ton-crypto";
import {WordsService} from "../../../auth/services/words/words.service";
import {WalletV3ContractR1} from "tonweb/dist/types/contract/wallet/v3/wallet-v3-contract-r1";

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  wallet: WalletV3ContractR1;
  PUBLIC_KEY = 'f73fa9b4381c8c23bbcfa8794c53a43892790614b24e0f04cd89f17679166f7c';
  NETWORK_TOKEN = Buffer.from(this.PUBLIC_KEY);
  tonweb = new TonWeb(
    new TonWeb.HttpProvider('https://testnet.toncenter.com/api/v2/jsonRPC',
      {apiKey: this.PUBLIC_KEY}
    ));
  // Create Client
  client = new TonClient({
    endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
    apiKey: this.PUBLIC_KEY
  });
  walletVersion: '4';
  isLedger: boolean;
  address: string;


  constructor(private httpService: HttpService,
              private wordsService: WordsService) {
    const localWallet = localStorage.getItem('wallet');
    if (localWallet)
      this.wallet = JSON.parse(localWallet);
  }

  checkHealth(): Observable<any> {
    return this.httpService.sendRequest('')
  }

  getWalletBalance = async () => {
    const address = localStorage.getItem('wallet_address');
    let res;
    if (address) {
      res = await this.tonweb.getBalance(address);
      res = fromNano(res);
    }
    return res;
  }

  createWallet = async () => {
    const keyPair = await mnemonicToWalletKey(this.wordsService.secretWords);
    this.wallet = this.tonweb.wallet.create({publicKey: keyPair.publicKey, workchain: 0});
    if (this.wallet) {
      localStorage.setItem('wallet', JSON.stringify(this.wallet));
      const address = await this.wallet.getAddress();
      if (address)
        localStorage.setItem('wallet_address', address.toString());
    }
    return this.wallet;
  }
  importWallet = async (words: string[]) => {
    const keyPair = await mnemonicToWalletKey(words);
    this.wallet = this.tonweb.wallet.create({publicKey: keyPair.publicKey, workchain: 0});
    if (this.wallet) {
      localStorage.setItem('wallet', JSON.stringify(this.wallet));
    }
    return this.wallet;
  }
  deployWallet = async () => {
    // const wallet = this.tonweb.wallet.create({publicKey});
    // this.wallet.depl
  }
}
