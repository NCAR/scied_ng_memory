import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../core/services/data/data.service';
import { WebappService } from '../core/services/webapp/webapp.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'scied-sun-memory-game',
  templateUrl: './sun-memory-game.component.html',
  styleUrls: ['./sun-memory-game.component.scss']
})
export class SunMemoryGameComponent implements OnInit, OnDestroy {
  data: any;
  level: string;
  baseUrl = '/';
  subscription: Subscription;

  constructor(private dataService: DataService, private webapp: WebappService, private activeRoute: ActivatedRoute, private renderer: Renderer2) {
    webapp.setBaseUrl('/');
    webapp.setShowFooter(true);
    webapp.setHomeButton(true);
    webapp.setBackButton(true);
    webapp.setPageTitle("SUN MEMORY");
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.level = routeParams.id;
      this.getData(environment.pathAssets + "data/sun-memory/sun-memory.json");
    });
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
    if (this.data.game.screens && this.data.game.screens.game) {
      this.data.game.screens.game.class.forEach((item) => {
        this.renderer.removeClass(document.body, item);
      });
      let shuffle = this.dataService.shuffle(this.data.game.screens.game.class);
      // shuffle the set of potential class names then pick the first to be the body class
      this.renderer.addClass(document.body, shuffle[0]);
    }
  }

  ngOnDestroy() {
    if (this.data.game.screens && this.data.game.screens.game) {
      this.data.game.screens.game.class.forEach((item) => {
        this.renderer.removeClass(document.body, item);
      });
    }
  }
}
