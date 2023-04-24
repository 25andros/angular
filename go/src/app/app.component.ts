import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'go';

  isOpen: boolean = false;
  sidebarIcon: string = "chevron_right";
  cssplayValue ="";

  iconChange() {
    if (this.isOpen == true) {
      this.sidebarIcon = "chevron_right";
    }
    if (this.isOpen == false) {
      this.sidebarIcon = "chevron_left";
    }

  }

  displayIt(alpha: any) {

    alert(alpha + " is the value");
  }

  colourMode:string = "light_mode";

  colour(alpha:string){
  this.colourMode = alpha;
  }
}
