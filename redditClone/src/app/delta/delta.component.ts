import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css'],
})
export class DeltaComponent {
  @Input() item = '';

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() CIsendUp = new EventEmitter<string>();

  sayz = '';
  panelOpenState = false;
  hiddenToggles = false;

  longText =
    'Amet unde rerum dolor atque eum, doloribus? Debitis esse similique velit ut perferendis Id totam harum deleniti distinctio atque atque Unde repellendus minus repudiandae dolores labore Nostrum harum nam tenetur';

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  sendUpFx(alpha: string) {
    this.CIsendUp.emit(alpha);
  }

  randomNumber(upperBoundNumber: number) {
    return Math.floor(Math.random() * upperBoundNumber) + 1;
  }

  cssChange(colour: string, defaultColour = 'purple') {
    if (colour == 'random') {
      let r = this.randomNumber(55) + 200;
      let randColour = 'rgb(' + r + ',' + r + ',' + r + ')';
      //('rgb(200,225,255)');

      //console.log(randColour);
      document.body.style.backgroundColor = randColour;
      return;
    }
    document.body.style.backgroundColor = colour;
    console.log(colour);
  }
}
