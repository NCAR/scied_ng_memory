import { Component, OnInit, Input } from '@angular/core';
import { WebappService } from '../../services/webapp/webapp.service';

@Component({
  selector: 'scied-memory-menu',
  templateUrl: './memory-menu.component.html',
  styleUrls: ['./memory-menu.component.scss']
})
export class MemoryMenuComponent implements OnInit {
  showCreditsModal = false;
  creditstitle = "Credits and Acknowledgements";
  @Input() data:any = null;
  @Input() baseUrl:any = null;
  resolution_web:boolean = false;
  resolution_exhibit:boolean = true;

  constructor(public webapp: WebappService) { }

  ngOnInit() {
    this.determineResolution();
  }
  determineResolution(){
    if(this.data && this.data.game && this.data.game.resolution == 'exhibit'){
      this.resolution_exhibit = true;
    } else if(this.data && this.data.game && this.data.game.resolution == 'web'){
        this.resolution_web = true;
    }
  }
  toggleCreditsModal() {
      this.showCreditsModal = !this.showCreditsModal;
  }

  closeModal() {
      this.showCreditsModal = !this.showCreditsModal;
  }

  onVisibleChange(event){
    this.showCreditsModal = event;
  }

  gotoLevel(page){
    this.webapp.goToPage(this.baseUrl+'/'+page)
  }

}
