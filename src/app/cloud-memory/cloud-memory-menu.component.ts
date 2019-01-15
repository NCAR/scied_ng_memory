import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../services/data/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'scied-cloud-memory-menu',
  templateUrl: './cloud-memory-menu.component.html',
  styleUrls: ['./cloud-memory.component.scss']
})
export class CloudMemoryMenuComponent implements OnInit {
  data: any;
  baseUrl = '/';
  subscription: Subscription;
  constructor(private dataService: DataService, private renderer: Renderer2) {
    this.getData(environment.pathAssets+"data/cloud-memory/cloud-memory.json");
  }
  getData(url: string): void {
    if (url && url != "") {
      this.subscription = this.dataService.getData(url).subscribe(
        data => {
          this.data = data;
          this.setBackground();
        }
      );
    }
  }
  setBackground(){
    // first ensure none of these are already a className
    if(this.data.game.screens && this.data.game.screens.menu){
      this.data.game.screens.menu.class.forEach((item)=>{
        this.renderer.removeClass(document.body, item);
      });
      let shuffle = this.dataService.shuffle(this.data.game.screens.menu.class);
      // shuffle the set of potential class names then pick the first to be the body class
      this.renderer.addClass(document.body, shuffle[0]);
    }
  }
  ngOnInit() {
  }

}
