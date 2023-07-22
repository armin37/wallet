import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../http/http.service";
import TonWeb from "tonweb";
import {Address, TonClient, fromNano} from "ton";
import {WalletContractV4} from "ton";
import {mnemonicToWalletKey} from "ton-crypto";

@Injectable({
  providedIn: 'root'
})
export class WalletService {
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
  walletVersion: string;
  words: string;
  isLedger: boolean;
  address: string;

  secretWords = ['gun', 'freedom', 'wallet', 'paper', 'date', 'weight', 'health', 'public', 'zero', 'bounce', 'lift', 'pen', 'attack', 'phone', 'up', 'matter', 'push', 'joke', 'right', 'like', 'close', 'type', 'kick', 'home']

  constructor(private httpService: HttpService) {
  }

  checkHealth(): Observable<any> {
    return this.httpService.sendRequest('')
  }

  getWalletBalance = async () => {
    const res = await this.client.getBalance(Address.parse('EQCBtAV4myl6oO4bgfgatRFJsHqQg_d0itqPo452MkISpl4E'));
    console.log(fromNano(res));
  }

  createWallet = async () => {
    await mnemonicToWalletKey(this.secretWords);
    const wallet = WalletContractV4.create({publicKey: this.NETWORK_TOKEN, workchain: 0});
    return wallet;
  }
}
