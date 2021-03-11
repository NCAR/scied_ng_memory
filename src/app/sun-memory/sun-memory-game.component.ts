import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../services/data/data.service';
import { WebappService } from '../services/webapp/webapp.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'scied-sun-memory-game',
  templateUrl: './sun-memory-game.component.html',
  styleUrls: ['./sun-memory-game.component.scss']
})
export class SunMemoryGameComponent implements OnInit, OnDestroy {
  data: any = null;
  level: string = null;
  baseUrl = '/';
  subscription: Subscription = null;

  constructor(private dataService: DataService, public webapp: WebappService, private activeRoute: ActivatedRoute, private renderer: Renderer2) {
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
    if (this.data && this.data.game && this.data.game.screens && this.data.game.screens.game) {
      this.data.game.screens.game.class.forEach((item) => {
        this.renderer.removeClass(document.body, item);
      });
      let shuffle = this.dataService.shuffle(this.data.game.screens.game.class);
      // shuffle the set of potential class names then pick the first to be the body class
      this.renderer.addClass(document.body, shuffle[0]);
    }
  }

  ngOnDestroy() {
    if (this.data && this.data.game && this.data.game.screens && this.data.game.screens.game) {
      this.data.game.screens.game.class.forEach((item) => {
        this.renderer.removeClass(document.body, item);
      });
    }

        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
  }
}
