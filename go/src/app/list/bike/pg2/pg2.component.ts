import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Cassette } from '../cassette';
import { CassetteService } from '../cassette.service';

import { ChainRing } from '../chain-ring';
import { ChainRingService } from '../chain-ring.service';


import { DrivetrainService } from '../drivetrain.service';
import { Drivetrain } from '../drivetrain';

import { WheelService } from '../wheel.service';
import { Wheel } from '../wheel';



@Component({
  selector: 'app-pg2',
  templateUrl: './pg2.component.html',
  styleUrls: ['./pg2.component.scss'],
})
export class Pg2Component {

  constructor(private cassetteBridge: CassetteService, private chainRingBridge: ChainRingService, private drivetrainBridge: DrivetrainService, private wheelBridge: WheelService) { }

  rearListIt: any;
  cassette: Cassette[] = [];
  chainRing: ChainRing[] = [];

  drivetrain: Drivetrain[] = [];

  wheel: Wheel[] = [];

  ngOnInit() {
    this.cassette = this.cassetteBridge.getCassette();
    this.rearListIt = this.cassetteBridge.getCassette();

    //this.chainRing = this.chainRingBridge.getChainRing();

    this.rearGears = this.cassetteBridge.cassettes;
    this.frontGears = this.chainRingBridge.chainRings;
    this.wheel = this.wheelBridge.wheel;

    //this.dtFX = this.drivetrainBridge;

  }
  //Reactive Forms

  chainringSelect = new FormControl(1);
  FrontGEAR = new FormControl(0);

  cassetteSelection = new FormControl(2);
  RearGEAR = new FormControl(0);

  wheelSelection = new FormControl(1);
  tyreSelection = new FormControl(47);


  gearingSelection = new FormGroup({

    chainringID: this.chainringSelect,
    idFGear: this.FrontGEAR,

    cassetteID: this.cassetteSelection,
    idRGear: this.RearGEAR,

    wheelSize: this.wheelSelection,
    tyreSize: this.tyreSelection,
  });



  frontGears: { name: string, build: string, descript: string, gears: number[] }[] = [];
  rearGears: { name: { speed: string, descript: string }, gears: number[] }[] = [];



  //accessor functions

  tyrepicked(): number {
    return this.tyreSelection.value || 0;
  }

  wheelpicked(): number {
    return this.gearingSelection.value.wheelSize || 0;
  }

  frontID(): number {
    return this.gearingSelection.value.chainringID || 0;
  }

  frontGear(): number {
    return this.gearingSelection.value.idFGear || 0;
  }

  //rear fx's
  rearID(): number {
    return this.gearingSelection.value.cassetteID || 0;
  }

  rearGear(): number {

    return this.gearingSelection.value.idRGear || 0;
  }

  tyreCircumference() {
    // return value in metres

    return (Math.PI * (this.wheel[this.wheelpicked()].size + (2 * this.tyrepicked())) / 1000);
  }

  spinRatio2() {

    console.log(this.frontGears[this.frontID()].gears[this.frontGear()] / this.rearGears[this.rearID()].gears[this.rearGear()]);
  }

  spinRatio(i: number, j: number) {
    return this.frontGears[this.frontID()].gears[i] / this.rearGears[this.rearID()].gears[j];
  }


  //dual array and loading into an array

  rg(i: number) {
    return this.rearGears[this.rearID()].gears[i];
  }

  fg(i: number) {
    return this.frontGears[this.frontID()].gears[i];
  }

  travelProp: number[][] = [[], [], []];

  doing2() {

    //clear the array
    for (let i = 0; i < 3; i++) {
      this.travelProp[i] = [];
    }

    let x = this.frontGears[this.frontID()].gears.length;
    let y = this.rearGears[this.rearID()].gears.length;

    for (let i = 0; i < x; i++) {
      this.travelProp[i]
      for (let j = 0; j < y; j++) {

        let a = this.truncDigits(((this.fg(i) / this.rg(j)) * this.tyreCircumference()), 2);
        this.travelProp[i][j] = a;
      }
    }
    console.log(this.travelProp);
  }


  cycleForm = new FormGroup({

    speedForm: new FormControl("", { nonNullable: true }),
    detailsForm: new FormControl(""),
    position: new FormControl(0),
    size: new FormControl(49),
    front: new FormControl(53),
    rear: new FormControl(44),

  });


  formSumbit() {

    this.changeSpeed(this.cycleForm.value.speedForm || "");
    this.changeDescrip(this.cycleForm.value.detailsForm || "");
    this.modGears(this.cycleForm.value.position || 0, this.cycleForm.value.size || 0);

    //this.log(this.cycleForm.value);
    //this.log(this.rearGears[0]);

  }


  //data services...
  appendIt(gear: number) {
    this.cassetteBridge.appendGearing(gear);
  }

  changeSpeed(nom: string) {
    this.cassetteBridge.appendSpeed(nom);
  }

  changeDescrip(nom: string) {
    this.cassetteBridge.appendDescript(nom);
  }

  modGears(place: number, size: number) {
    this.cassetteBridge.modSpecificGear(place, size);
  }

  modGears2(place: number, size: number) {
    this.cassetteBridge.modSpecificGear(place, size);
  }

  truncDigits(inputNumber: number, digits: number) {
    const fact = 10 ** digits;
    return Math.floor(inputNumber * fact) / fact;
  }

}
