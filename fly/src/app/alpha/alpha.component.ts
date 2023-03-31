import { Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.scss']
})
export class AlphaComponent implements OnChanges {

  constructor() {
    this.loggedIn = true;
    this._isUserLoggedIn = false;
  }

  private _isUserLoggedIn;

  amIn: Boolean = false;

  flipTruth() {
    this.amIn = !this.amIn;
  }

  @Output() parentSend = new EventEmitter();


  //parent send info
  
  name:string = "johnny";

  toParentDo(alpha:string) {
    //alert("what up for the kidz!");
    this.parentSend.emit(alpha);
  }


  private _message = "good day sir, you are logged in.";

  get statusM() {
    return this._message;
  }

  set statusM(alpha: string) {
    this._message = alpha;

  }




  get isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  @Input()
  set isUserLoggedIn(alpha: boolean) {
    this._isUserLoggedIn = alpha;
    if (alpha === true) {
      this._message = ("why, it's an even better day sir...");
    }
    else {
      this._message = ("You may need to login, sir.");
    }
  }

  //@Input() isUserLoggedIn: boolean;

  @Input() loggedIn: boolean;
  //can also rename this as
  //@Input(loggedIn) statusFlag: boolean;

  ngOnInit() {

  }

  ngOnChanges() {

  }

  flipChildSend() {
    this.loggedIn = !this.loggedIn;
  }
}
