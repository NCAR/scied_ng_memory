import { Injectable } from '@angular/core';
import { MemoryGame, MemoryCard } from './memory-game.model';

@Injectable()
export class MockMemoryGameService {
  audioEnabled: boolean = false;
  card: MemoryCard = {
    title: "",
    class: "",
    pair: 0,
    flipped: false,
    flippable: true,
    backImage: "",
    frontImage: ""
  };
  tempfirst: MemoryCard = Object.create(this.card);
  tempsecond: MemoryCard = Object.create(this.card);

  gameInit: MemoryGame = {
    unmatchedPairs: 0,
    currentScore: 0,
    ableToSelect: true,
    firstPick: Object.create(this.card),
    secondPick: Object.create(this.card),
    message: "",
    showButtons: false,
    chooseLevelButtonText: "",
    restartButtonText: "",
    audioButtonText: "",
    matchtitle: "",
    matchimage: "",
    matchcontent: ""
  };
  data:any;

  game: MemoryGame = Object.create(this.gameInit);

  flipNoMatchTimeout = null;
  lastAction = null;

  constructor() {}

  setData(data){
    this.data = data;

  }

  flip(tile) {

  }
  toggleAudio(){

  }

  reload(){

  }

  resetGame(){
  }

  private recordTile(tile){
  }
  private checkTiles(){

  }
  private recordMatch(){


  }
  private noMatch(){


  }
  private incrementScore(){

  }
  private resetTiles(){

  }
  private checkIfWon(){

  }

  private resetTempCards(){

  }
}
