import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[memoryCard]',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent implements OnInit {

  @Input() tile:any;
  constructor() { }

  ngOnInit() {
  }

}
