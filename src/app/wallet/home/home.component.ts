import {Component, OnInit} from '@angular/core';
import {WalletService} from "../../shared/services/wallet/wallet.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  balance: any;

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    console.log(this.walletService.wallet);
    this.updateWalletBalance();
  }

  updateWalletBalance = async () => {
    this.balance = await this.walletService.getWalletBalance();
  }

}
