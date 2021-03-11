import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { WebappService } from '../../services/webapp/webapp.service';
import { MemoryGameService } from '../memory-game.service';
import { MemoryCard } from '../memory-game.model';


@Component({
  selector: 'scied-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {
  @Input() data:any = null;
  @Input() baseUrl:any = null;
  @Input() level:any = null;
  tiles:any = [];
  chosenImage:string = null;
  tile_width_xlg:boolean = false;
  tile_width_lg:boolean = false;
  tile_width_med:boolean = false;
  tile_width_small:boolean = false;
  resolution_web:boolean = false;
  resolution_exhibit:boolean = false;

  constructor(private dataService: DataService, public webapp: WebappService, public memoryGameService: MemoryGameService) { }

  ngOnInit(){}
  ngOnChanges(){
    //
    this.loadData();
  }
  reloadData(){
    this.memoryGameService.reload();
    this.tiles = [];
    this.chosenImage = "";
    this.tile_width_small = false;
    this.tile_width_med = false;
    this.loadData();
  }
  loadData(){
    if (this.data && this.data.game && this.data.game.levels[this.level]) {
        // pull out only items for this level
        this.data.tiles.forEach(tile => {
          if(tile.levels.includes(this.level)){
            // create one tile for each matching image of the tile
            let pairCount = 0;
            tile.images.forEach(image => {
              let item:MemoryCard = {
                title: tile.title,
                class: tile.className,
                pair: pairCount,
                flipped: false,
                flippable: true,
                backImage: this.data.game.backImage,
                frontImage: image
              }
              this.tiles.push(item);
              pairCount++;
            });
          }
        });
        this.tiles = this.dataService.shuffle(this.tiles);
        // divide num cards in half to get number of pairs and set up game obj
        this.memoryGameService.game.unmatchedPairs = this.tiles.length/2;
        this.memoryGameService.setData(this.data);
        this.calculateWidths();
        this.determineResolution();
    }
  }
  determineResolution(){
      if(this.memoryGameService.data && this.memoryGameService.data.game.resolution == 'exhibit'){
        this.resolution_exhibit = true;
      } else if (this.memoryGameService.data && this.memoryGameService.data.game.resolution == 'web'){
          this.resolution_web = true;
      }
  }
  calculateWidths(){
    //determine width of tile section
    if(this.memoryGameService.data && this.memoryGameService.game.unmatchedPairs >= 14){
      this.tile_width_xlg = true;
      this.tile_width_lg = false;
      this.tile_width_med = false;
      this.tile_width_small = false;
    } else if(this.memoryGameService.data && this.memoryGameService.game.unmatchedPairs == 12){
      this.tile_width_xlg = false;
      this.tile_width_lg = true;
      this.tile_width_med = false;
      this.tile_width_small = false;
    } else if(this.memoryGameService.data && this.memoryGameService.game.unmatchedPairs == 10){
      this.tile_width_xlg = false;
      this.tile_width_lg = false;
      this.tile_width_med = true;
      this.tile_width_small = false;
    } else if(this.memoryGameService.data && this.memoryGameService.game.unmatchedPairs <= 8){
      this.tile_width_xlg = false;
      this.tile_width_lg = false;
      this.tile_width_med = false;
      this.tile_width_small = true;
    } else {
      // greater than 14 so just do full length
        this.tile_width_med = false;
        this.tile_width_small = false;
        this.tile_width_lg = false;
        this.tile_width_xlg = false;
    }
  }
  retrieveMatchTitle(id){
    this.chosenImage = this.data.information[id].image;
    let reference = this.data.information[id].reference;
    return this.data.infocontent[reference].title;
  }
  ngOnDestroy(){
    this.memoryGameService.resetGame();
  }

}
