import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  words: string;
  secretWords = ['my', 'freedom', 'wallet', 'paper', 'date', 'weight', 'health', 'public', 'zero', 'bounce', 'lift', 'pen', 'attack', 'phone', 'up', 'matter', 'push', 'joke', 'right', 'like', 'close', 'type', 'kick', 'home']

  constructor() { }
}
