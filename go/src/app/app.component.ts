import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'go';

  isOpen: boolean = true;
  sidebarIcon: string = "chevron_right";

  iconChange() {
    if (this.isOpen == true) {
      this.sidebarIcon = "chevron_right";
    }
    if (this.isOpen == false) {
      this.sidebarIcon = "chevron_left";
    }

  }

  display() {

  }
}
