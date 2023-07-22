import {Component, OnInit} from '@angular/core';
import {WalletService} from "../../../services/wallet/wallet.service";
import {WalletContractV4} from "ton/dist/wallets/WalletContractV4";

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  wallet: WalletContractV4;
  render = false;

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.walletService.getWalletBalance();
    this.createWallet();
  }

  createWallet = async () => {
    this.wallet = await this.walletService.createWallet();
    console.log(this.wallet, this.wallet.address.toString());
  }
}
