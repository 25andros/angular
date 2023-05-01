import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Cassette } from '../cassette';
import { CassetteService } from '../cassette.service';

import { ChainRing } from '../chain-ring';
import { ChainRingService } from '../chain-ring.service';

@Component({
  selector: 'app-pg2',
  templateUrl: './pg2.component.html',
  styleUrls: ['./pg2.component.scss'],
})
export class Pg2Component {

  constructor(private cassetteBridge: CassetteService, private chainRingBridge: ChainRingService) { }

  rearListIt: any;
  cassette: Cassette[] = [];
  chainRing: ChainRing[] = [];


  ngOnInit() {
    this.cassette = this.cassetteBridge.getCassette();
    this.rearListIt = this.cassetteBridge.getCassette();

    this.chainRing = this.chainRingBridge.getChainRing();

    this.rearGears = this.cassetteBridge.cassettes;
    this.frontGears = this.chainRingBridge.chainRings;

  }


  //Reactive Forms

  chainringSelect = new FormControl(1);
  FrontGEAR = new FormControl(0);

  cassetteSelection = new FormControl(2);
  RearGEAR = new FormControl(0);

  gearingSelection = new FormGroup({

    chainringID: this.chainringSelect,
    idFGear: this.FrontGEAR,


    cassetteID: this.cassetteSelection,
    idRGear: this.RearGEAR,

  });

  frontGears: { name: string, build: string, descript: string, gears: number[] }[] = [];
  rearGears: { name: { speed: string, descript: string }, gears: number[] }[] = [];



  //accessor functions

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


  spinRatio() {

    console.log(this.frontGears[this.frontID()].gears[this.frontGear()]/this.rearGears[this.rearID()].gears[this.rearGear()]);
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



}
