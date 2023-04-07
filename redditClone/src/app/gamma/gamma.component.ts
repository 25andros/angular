import { Component } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

import {  AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css'],
})
export class GammaComponent implements AfterViewInit {


  constructor() {

  }

//the follow site is an example of how to import canvas to a sheet...
 
 //https://stackblitz.com/edit/canvas-example?file=app%2Fapp.component.html&file=app%2Fapp.component.ts 
  ngAfterViewInit() {


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
