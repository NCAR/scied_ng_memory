import { Injectable } from '@angular/core';
import { MemoryGame, MemoryCard } from './memory-game.model';

@Injectable()
export class MemoryGameService {
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
  data:any = null;

  game: MemoryGame = Object.create(this.gameInit);

  flipNoMatchTimeout = null;
  lastAction = null;

  constructor() {}

  setData(data){
    this.data = data;
    this.game.message = this.data.game.messages.click;
    this.game.showButtons = this.data.game.showButtons;
    if(this.data.game.messages.buttonTextQuit){
      this.game.chooseLevelButtonText = this.data.game.messages.buttonTextQuit;
    }
    if(this.data.game.messages.buttonToggleAudioOn){
      this.game.audioButtonText = this.data.game.messages.buttonToggleAudioOn
    }
    if(this.data.game.messages.buttonTextRestartLevel){
      this.game.restartButtonText = this.data.game.messages.buttonTextRestartLevel;
    }

    if(this.data.audio){
      this.audioEnabled = true;
    }
  }

  flip(tile) {
    if(tile.flippable && this.game.ableToSelect){
      //flip the tile
      tile.flipped = !tile.flipped;
      //check if this is the first or second tile being checked
      this.recordTile(tile);
      this.checkTiles();
    }
  }
  toggleAudio(){
    if(this.audioEnabled == true && this.data.game.messages.buttonToggleAudioOff){
      this.game.audioButtonText = this.data.game.messages.buttonToggleAudioOff;
    } else if(this.audioEnabled == false && this.data.game.messages.buttonToggleAudioOn){
      this.game.audioButtonText = this.data.game.messages.buttonToggleAudioOn;
    }
    this.audioEnabled = !this.audioEnabled;
  }

  reload(){
    this.resetGame();
    this.resetTiles();
    this.resetTempCards();
  }

  resetGame(){
    this.game = Object.create(this.gameInit);
  }

  private recordTile(tile){
    if(tile.flipped == true){
      if (this.game.firstPick.class == ""){
        // hurry up and reset temps if they still exist when picking a new card
        if(this.lastAction == "miss"){
          clearTimeout(this.flipNoMatchTimeout);
          this.tempfirst.flipped = false;
          this.tempsecond.flipped = false;
        }

        if(this.audioEnabled){
          let audioPlayer : HTMLVideoElement = <HTMLVideoElement> document.getElementById('first');
          audioPlayer.play();
        }
        this.game.message = this.data.game.messages.one_more;
        // first tile
        this.game.firstPick = tile;

      } else if(this.game.secondPick.class == ""){
        if(this.audioEnabled){
          let audioPlayer : HTMLVideoElement = <HTMLVideoElement> document.getElementById('first');
          audioPlayer.play();
        }
        this.game.secondPick = tile;
        this.game.ableToSelect = false;

        this.game.message = this.data.game.messages.one_more;
      }
    } else if(tile.flipped == false){
      if(this.game.firstPick == tile){
        this.game.firstPick = Object.create(this.card);
      } else if(this.game.secondPick == tile){
        this.game.secondPick = Object.create(this.card);
      }
    }
  }
  private checkTiles(){
    // if both are active, then after timeout, clear from game and flip both backImage
   // both tiles picked
    if(this.game.firstPick.class && this.game.secondPick.class){
      // are both the same class name and therefore a match?
      if(this.game.firstPick.class == this.game.secondPick.class){
        // are both from the same set
        if(this.game.firstPick.pair != this.game.secondPick.pair){
          // remove and increment current
          this.recordMatch();
        } else {
          //reset
            this.noMatch();
        }
      } else {
        // reset
          this.noMatch();
      }
    }
  }
  private recordMatch(){
    this.lastAction = "match";
    //increment currentScore
    this.incrementScore();

    // get reference
    let reference = this.data.information[this.game.firstPick.class].reference;
    let image = this.data.information[this.game.firstPick.class].image;
    // make a duplicate so can operate while continuing game
    this.tempfirst = this.game.firstPick;
    this.tempsecond = this.game.secondPick;
    // matched tiles can no longer be flipped
    this.tempfirst.flippable = false;
    this.tempsecond.flippable = false;
    this.resetTiles();

    this.game.message = this.data.game.messages.match;

    // provide info about this tile to user
    this.game.matchtitle = this.data.infocontent[reference].title;
    this.game.matchcontent = this.data.infocontent[reference].content;
    this.game.matchimage = image;

    // timeout to add hide
    setTimeout(() => {
      this.tempfirst.hide = true;
      this.tempsecond.hide = true;
      if(this.audioEnabled){
        let audioPlayer : HTMLVideoElement = <HTMLVideoElement> document.getElementById('match');
        audioPlayer.play();
      }
    }, 500);

    this.checkIfWon();

  }
  private noMatch(){
    this.lastAction = "miss";
    // make a duplicate so can operate while continuing game
    this.tempfirst = this.game.firstPick;
    this.tempsecond = this.game.secondPick;
    this.resetTiles();

    if(this.audioEnabled){
      let audioPlayer : HTMLVideoElement = <HTMLVideoElement> document.getElementById('miss');
      audioPlayer.play();
    }
    this.game.currentScore = this.game.currentScore - 1;
    this.game.message = this.data.game.messages.miss;

    this.flipNoMatchTimeout = setTimeout(() => {
      this.tempfirst.flipped = false;
      this.tempsecond.flipped = false;
      this.resetTempCards();
    }, 2000);

  }
  private incrementScore(){
    this.game.currentScore += 10;
    this.game.unmatchedPairs--;
  }
  private resetTiles(){
    this.game.firstPick = Object.create(this.card);
    this.game.secondPick = Object.create(this.card);
    this.game.ableToSelect = true;
    this.checkIfWon();
  }
  private checkIfWon(){
    if(this.game.unmatchedPairs == 0){
      this.game.message = this.data.game.messages.won;
      this.game.showButtons = true;

      if(this.data.game.messages.buttonTextSelectLevel){
        this.game.chooseLevelButtonText = this.data.game.messages.buttonTextSelectLevel;
      }
      if(this.data.game.messages.buttonTextRestartPlayAgain){
        this.game.restartButtonText = this.data.game.messages.buttonTextPlayAgain;
      }
    }
  }

  private resetTempCards(){
      this.tempfirst = Object.create(this.card);
      this.tempsecond= Object.create(this.card);
  }
}
