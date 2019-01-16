import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../core/services/data/data.service';
import { WebappService } from '../core/services/webapp/webapp.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'scied-sun-memory-menu',
  templateUrl: './sun-memory-menu.component.html',
  styleUrls: ['./sun-memory-menu.component.scss']
})
export class SunMemoryMenuComponent implements OnInit, OnDestroy {
  data: any;
  baseUrl = '/';
  subscription: Subscription;
  constructor(private dataService: DataService, private webapp: WebappService, private renderer: Renderer2) {
    webapp.setBaseUrl('/');
    webapp.setShowFooter(true);
    webapp.setHomeButton(true);
    webapp.setBackButton(true);
    webapp.setPageTitle("SUN MEMORY");
    this.getData(environment.pathAssets + "data/sun-memory/sun-memory.json");
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
    if (this.data.game.screens && this.data.game.screens.menu) {
      this.data.game.screens.menu.class.forEach((item) => {
        this.renderer.removeClass(document.body, item);
      });
      let shuffle = this.dataService.shuffle(this.data.game.screens.menu.class);
      // shuffle the set of potential class names then pick the first to be the body class
      this.renderer.addClass(document.body, shuffle[0]);
    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.data.game.screens && this.data.game.screens.menu) {
      this.data.game.screens.menu.class.forEach((item) => {
        this.renderer.removeClass(document.body, item);
      });
    }
  }

}
