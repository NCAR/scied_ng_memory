import { Component, OnInit, Input } from '@angular/core';
import { WebappService } from '../../../services/webapp/webapp.service';

@Component({
  selector: 'scied-memory-menu',
  templateUrl: './memory-menu.component.html',
  styleUrls: ['./memory-menu.component.scss']
})
export class MemoryMenuComponent implements OnInit {
  showCreditsModal = false;
  creditstitle = "Credits and Acknowledgements";
  @Input() data:any;
  @Input() baseUrl:any;
  constructor(private webapp: WebappService) { }

  ngOnInit() {
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
