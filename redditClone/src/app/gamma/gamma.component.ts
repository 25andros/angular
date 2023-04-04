import { Component } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

import { ViewChild, ElementRef, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css'],
})
export class GammaComponent implements AfterViewInit {

  //@ViewChild('canvasEl') canvasEl: ElementRef;
  @ViewChild('canvasEl',{static:true}) canvasEl!: ElementRef;
  private context: CanvasRenderingContext2D;

  constructor() {

    this.canvasEl = new ElementRef("");
    this.context = new CanvasRenderingContext2D();
  }

//the follow site is an example of how to import canvas to a sheet...
  //undo comments at L30
  //having trouble with constructor element on L30, not sure how to fix
 
 //https://stackblitz.com/edit/canvas-example?file=app%2Fapp.component.html&file=app%2Fapp.component.ts 
  ngAfterViewInit() {
    //this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');



    this.draw();
  }

  /**
   * Draws something using the context we obtained earlier on
   */
  private draw() {
    this.context.font = '30px Arial';
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';

    const x = (this.canvasEl.nativeElement as HTMLCanvasElement).width / 2;
    const y = (this.canvasEl.nativeElement as HTMLCanvasElement).height / 2;
    this.context.fillText('Angular Canvas', x, y);
  }
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  appear: boolean = true;
  isdisabled: boolean = false;

  changeAppear() {
    this.appear = !this.appear;
  }

  data = {
    title: 'gamma component',
    name: '',
  };

  gammaLook = {
    color: 'orange',
    fontStyle: 'italic',
  };

  /*
  cRay = {
     feelings[],colours[]}; 
*/
  notes = {
    hiddenValue: 10,
  };

  incrUp() {
    this.notes.hiddenValue += 1;
  }

  incrDown() {
    this.notes.hiddenValue -= 1;
  }

  noteValue = 9;

  setSpinnerVal(intX: any) {
    console.log(typeof intX);
    intX = ~~intX;
    console.log(typeof intX);
    this.value = 0 + intX;
    console.log(this.value);
  }

  toConsole(valz: any): void {
    console.log(valz);
  }

  toggleTF() {
    this.isdisabled = !this.isdisabled;
  }

  toggleT() {
    this.isdisabled = true;
  }

  toggleF() {
    this.isdisabled = false;
  }

  sayValue(): string {
    let burn = this.value.toString();
    return burn;
  }

  sayz2screen() {
    return 'hello there.';
  }

  foo() {
    console.log('hello there.');
  }
}
