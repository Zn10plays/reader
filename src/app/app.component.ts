import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {NavOptionsComponent} from "./nav-options/nav-options.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('opt') options!: NavOptionsComponent;
  title = 'reader';

  ngAfterViewInit() {
    this.options.control.subscribe(() => {
      this.drawer.toggle()
    })
  }
}
