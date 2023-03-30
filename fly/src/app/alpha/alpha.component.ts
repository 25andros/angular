import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.scss']
})
export class AlphaComponent {
  
  constructor() {
    this.loggedIn = true;
    //boolean loggedIn = false;
  //this.loggedIn = new boolean(true);
  }

  amIn:Boolean = false;

  flipTruth(){
    this.amIn = !this.amIn;
  }



  @Input() loggedIn: boolean;
//can also rename this as
  //@Input(loggedIn) statusFlag: boolean;
  
  ngOnInit() {

  }

  flipChildSend(){
this.loggedIn = !this.loggedIn;
  }
}
