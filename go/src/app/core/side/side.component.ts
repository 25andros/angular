import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {

  isExpanded: boolean = true;
  funnybackgroundColor: string = "";
  areTogglesHidden: boolean = false;
  isNightTheme: boolean = false;
  visual_mode: string = "light_mode";

  vmSwitch() {
    this.isNightTheme = !this.isNightTheme;

    if (this.isNightTheme == false) {
      this.visual_mode = "light_mode";
    }

    if (this.isNightTheme == true) {
      this.visual_mode = "dark_mode";
    }
  }


  //export menu button functionality to side-nav in app.component
  @Output() upSend = new EventEmitter();

  action() {
    this.upSend.emit(this.visual_mode);
    //alert("hello");
  }



  display() {
    alert(this.isNightTheme + " " + this.visual_mode);
  }


  // input background color selection 

  @Output() colorSend = new EventEmitter();

  randomNumber(upperBoundNumber: number) {
    return Math.floor(Math.random() * upperBoundNumber) + 1;
  }

  cssPlay() {
    this.colorSend.emit(this.funnybackgroundColor);
  }

  cssPlayRand() {

    let r = this.randomNumber(255);
    let randColour = 'rgb(' + r + ',' + r + ',' + r + ')';
    //('rgb(200,225,255)');
    //console.log(randColour);

    this.colorSend.emit(randColour);
    //document.body.style.backgroundColor = randColour;
  }

  cssReset(){
  this.funnybackgroundColor ="";
    this.cssPlay();
  }
}
