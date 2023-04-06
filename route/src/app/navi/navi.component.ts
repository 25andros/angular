import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent {

  data = {
    title: "Gibbs Page",
    choice: "",
  }

  colorTheme = {
    isdark: false,
    currentSetting: "light_mode",

  }

  toScreen(): void {
    alert("Pont Neuf " + " " +this.colorTheme.isdark +" " + this.colorTheme.currentSetting);
  }


  constructor() {
  }


  // Parent Sends

  @Output() parentSend = new EventEmitter();

  changeTheme() {

   // this.colorTheme.isdark = !this.colorTheme.isdark;

    if (this.colorTheme.isdark === false) {
      this.colorTheme.currentSetting = "light_mode";
    }

    if (this.colorTheme.isdark === true) {
      this.colorTheme.currentSetting = "dark_mode";
    }

    this.parentSend.emit(this.colorTheme.currentSetting);
  }

}
