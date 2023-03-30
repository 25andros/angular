import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {


  data = {
    title: 'Hawaii',
    image2: 'https://media.cnn.com/api/v1/images/stellar/prod/201230100452-10-2021-travel-destinations-hawaii.jpg?q=x_0,y_0,h_1632,w_2900,c_fill/h_720,w_1280/f_webp',
    description: 'beautiful island',
    value: 0,
    pixels: 500,
    pixelH: 150,
    userStatusCurrent: false,
    info: "",
  };

  private _data = {
    _info2: "surfing is great ",
    _info3: "going to sail there one day",
  }

  constructor() {
    //this.nameElementRef: ElementRef; 
    //
    //viewCHild is throwing an error
    this.nameElementRef = new ElementRef("");
  }


  //viewChilds
  //@ViewChild('nameRef', { static: false }) nameElementRef?: ElementRef;
  @ViewChild('nameRef', { static: false }) nameElementRef: ElementRef;


  ngAfterViewInit() {
    //this.nameElementRef?.nativeElement.focus();
    this.nameElementRef.nativeElement.focus();

    console.log(this.nameElementRef);
  }


  //get && set

  get morInfo(): string {
    return this._data._info3;
  }

  get infomaker(): string {
    return this._data._info2;
  }

  set infomaker(alpha: string) {
    this._data._info2 = alpha;

    if (alpha === "four") {
      this._data._info3 += " on a calm swift voyage";
    }

    if (alpha === "three") {
      alert("cue from " + this._data._info3);
    }

  }



  addOne() {
    this.data.value += 1;
  }

  // Two-way split binding
  modelDo(alpha: string) {
    this.data.info = alpha;

    if (alpha === "one") {
      this.actionOne();
    }

    if (alpha === "two") {
      this.actionTwo();
    }

    if (alpha === "yo") {
      alert("yo yo yo!!!")
    }
  }

  actionOne() {
    this.data.title = "cheese";
    console.log("cheese brains...");
  }

  actionTwo() {
    this.data.title = "Tahiti";
    console.log(this.data.title + " is the best!!!");
  }


}


