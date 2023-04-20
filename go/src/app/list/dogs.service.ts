import { Injectable } from '@angular/core';
import { dogs } from './dogs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor() { }


  getDogs(): dogs[] {
    return [

      {
        id: 1,
        name: 'Kona',
        breed: 'Boston Terrier',
        age: 12,
        nature: 'sleepy',
        photo: "../../../assets/images/kona2.jpg",
        description: "A very sleepy dog at sea",
        nickname: "Big K",
      },
      {
        id: 2,
        name: 'Abby',
        breed: 'Boston Terrier',
        age: 10,
        nature: 'sweet',
        photo: '../../../assets/images/abby.jpg',
        description: "A dog ready to run",
        nickname: "little Abs",
      },
      {
        id: 3,
        name: 'Mateo',
        breed: 'Boston Terrier',
        age: 14,
        nature: 'playful',
        photo: '../../../assets/images/mateo.jpg',
        description: "A dog and his special flower",
        nickname: "Mateo the Great",
      }

    ];


  }



}
