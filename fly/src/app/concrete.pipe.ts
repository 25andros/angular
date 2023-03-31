import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concrete'
})
export class ConcretePipe implements PipeTransform {

  transform(inputVal: number, inputNumbPerson: number): number {

    if (inputNumbPerson == 2) {
      inputVal = 3300;
    }

    if (inputNumbPerson == 3) {
      inputVal = 2700;
    }

    if (inputNumbPerson >= 4) {
      inputVal = 2300;
    }

 
    if (inputNumbPerson >= 10) {
      inputVal = 2150;
    }

   return inputVal * inputNumbPerson;

  }

}
