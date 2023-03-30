import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.scss']
})
export class AlphaComponent {
  
  constructor() {
    this.loggedIn = false;
    //boolean loggedIn = false;
  //this.loggedIn = new boolean(true);
  }

  amIn:Boolean = true;

  flipTruth(){
    this.amIn = !this.amIn;
  }



  @Input() loggedIn: boolean;

  logginIn() {
    this.loggedIn = true;
  }
}
