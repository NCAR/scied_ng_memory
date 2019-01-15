import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'scied-modal',
  templateUrl: './scied-modal.component.html',
  styleUrls: ['./scied-modal.component.scss'],

})
export class SciedModalComponent implements OnInit {
  @Input() closable:boolean = false;
  @Input() visible: boolean;
  @Input() modaltitle: any;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
