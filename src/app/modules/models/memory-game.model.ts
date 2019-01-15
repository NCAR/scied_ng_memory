export interface MemoryCard {
  title: string;
  class: string;
  pair: number;
  flipped: boolean;
  flippable: boolean;
  hide?: boolean;
  backImage: string;
  frontImage: string;
}

export interface MemoryGame {
  unmatchedPairs: number;
  currentScore: number;
  ableToSelect: boolean;
  firstPick: MemoryCard;
  secondPick: MemoryCard;
  message?:string;
  showButtons?:boolean;
  chooseLevelButtonText?: string,
  restartButtonText?: string,
  audioButtonText?: string,
  matchtitle?: string;
  matchimage?:string;
  matchcontent?:string;
}
