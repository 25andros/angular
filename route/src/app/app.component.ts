import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'route';
  theme = "light_mode";

  test(alpha: string) {
    alert(alpha + " is present");

  }

  //Recived Parent Sends
  themeChange(alpha: string) {
    this.theme = alpha;
    //console.log(alpha);
  }

  childToGrandParent(alpha:string) {

    this.parentSend.emit(alpha);

  }


  constructor() {

  }


  // Parent Sends

  @Output() parentSend = new EventEmitter();


}

