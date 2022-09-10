import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-nav-options',
  templateUrl: './nav-options.component.html',
  styleUrls: ['./nav-options.component.scss']
})
export class NavOptionsComponent {
  @Output() control = new EventEmitter<boolean>();
  @Input() vertical = false;

  constructor() { }

  toggleNav() {
    this.control.emit(true);
  }
}
