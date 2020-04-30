import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() changeEmiter: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
    console.log(this.isOpen)

  }

  open(){
    this.isOpen = this.isOpen;
  }
  close(){
    this.isOpen = false;
    this.changeEmiter.emit(this.isOpen)
  }
}
