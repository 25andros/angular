import { Injectable } from '@angular/core';
import { ChainRing } from './chain-ring';


@Injectable({
  providedIn: 'root'
})
export class ChainRingService {

  constructor() { }

  chainRings = [

    {
      name: "Road",
      build: "2x",
      descript: "39-53",
      gears: [39, 53],
    },

    {
      name: "Gravel",
      build: "2x",
      descript: "26-40",
      gears: [26, 40],
    },

    {
      name: "Mountain",
      build: "3x",
      descript: "36-42-53",
      gears: [36, 42, 53],
    },
  ];




  
  getChainRing(): ChainRing[] {
    return [

      {
        name:"",
        build: "2x",
        descript: "39-53",
        gears: [39, 53],
      },

      {
        name:"",
        build: "2x",
        descript: "26-40",
        gears: [26, 40],
      },

      {
        name:"",
        build: "3x",
        descript: "36-42-53",
        gears: [36, 42, 53],
      },

    ];
  }
}
