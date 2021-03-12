import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../services/data/data.service';
import { WebappService } from '../services/webapp/webapp.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'scied-ac-memory-menu',
  templateUrl: './ac-memory-menu.component.html',
  styleUrls: ['./ac-memory-menu.component.scss']
})
export class AcMemoryMenuComponent implements OnInit, OnDestroy {
  data: any = null;
  subscription: Subscription = null;
  baseUrl: string = "/";

  constructor(private dataService: DataService, public webapp: WebappService, private renderer: Renderer2) {

  }
  ngOnInit() {
    this.getData(environment.pathAssets + "data/ac-memory/ac-memory.json");
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
  setBackground() {
    // first ensure none of these are already a className
    if (this.data.game&& this.data.game.screens && this.data.game.screens.menu) {
      this.data.game.screens.menu.class.forEach((item) => {
        this.renderer.removeClass(document.body, item);
      });
      let shuffle = this.dataService.shuffle(this.data.game.screens.menu.class);
      // shuffle the set of potential class names then pick the first to be the body class
      this.renderer.addClass(document.body, shuffle[0]);
    }
  }

  ngOnDestroy() {
    if (this.data.game && this.data.game.screens && this.data.game.screens.menu) {
      this.data.game.screens.menu.class.forEach((item) => {
        this.renderer.removeClass(document.body, item);
      });
    }
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
  }

}
