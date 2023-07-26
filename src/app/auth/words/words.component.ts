import {Component, OnInit} from '@angular/core';
import {WalletContractV4} from "ton/dist/wallets/WalletContractV4";
import {WalletService} from "../../shared/services/wallet/wallet.service";
import {ActivatedRoute, Router, UrlSegment} from "@angular/router";
import * as stream from "stream";
import {WordsService} from "../services/words/words.service";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  route = '';
  form: FormGroup;
  loading = false;

  constructor(private activatedRoute: ActivatedRoute,
              private walletService: WalletService,
              private wordsService: WordsService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      words: this.formBuilder.array([])
    });

    //route will be sign-in, sign-up or check
    const route = this.router.url.split('?')[0].split('/').pop();
    switch (route) {
      case 'sign-in':
        this.signInPreparation();
        break;
      case 'sign-up':
        this.signUpPreparation();
        break;
      case 'check':
        this.checkWordsPreparation();
        break;
    }

    // this.walletService.getWalletBalance();
    // this.createWallet();
  }

  signInPreparation() {
    this.route = 'sign-in';
    for (let i = 0; i < 24; i++) {
      this.words.push(this.formBuilder.control(''))
    }
  }

  signUpPreparation() {
    this.route = 'sign-up';
    this.addWordsToForm();
  }

  checkWordsPreparation() {
    this.addWordsToForm();
    this.route = 'check';
    for (let i = 0; i < 3; i++) {
      const rand = Math.floor(Math.random() * 24);
      this.words.at(rand).setValue('');
    }
  }

  // Helper method to add data rows to the FormArray
  addWordsToForm() {
    this.wordsService.secretWords.forEach(w => {
      this.words.push(this.formBuilder.control(w))
    })
  }

  createWallet = async () => {
    this.loading = true;
    const wallet = await this.walletService.createWallet();
    this.loading = false;
    if (wallet) {
      this.router.navigateByUrl('/wallet');
    }
  }

  nextStep() {
    const route = this.router.url.split('?')[0].split('/').pop();
    switch (route) {
      case 'sign-in':
        break;
      case 'sign-up':
        this.router.navigateByUrl('/auth/check')
        break;
      case 'check':
        const words: string[] = this.getWordsAsArray();
        if (!words.every((value, index) => value === this.wordsService.secretWords[index])) {
          //TODO show error
          console.log('not equal')
          return;
        }
        this.createWallet();
        break;
    }
  }

  // Getter to access the FormArray easily in the template
  get words(): FormArray {
    return this.form.get('words') as FormArray;
  }

  // Method to update a word at a specific index in the FormArray
  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }

  private getWordsAsArray(): string[] {
    const wordsArray: string[] = [];
    this.words.controls.forEach((control) => {
      if (control instanceof FormControl) {
        wordsArray.push(control.value);
      }
    });
    return wordsArray;
  }
}
