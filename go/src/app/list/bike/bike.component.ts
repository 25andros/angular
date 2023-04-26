import { Component } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent {

  data = {
    front: 53,
    rear: 11,
    diameter: 0,
    width: 50,
    ratio: 0,
    distance: 0,
  }

  log(alpha: any) {
    console.log(alpha);
  }

  spinRatio(): number {
    this.data.ratio = this.data.front / this.data.rear;
    return this.data.ratio;
  }

  //tyreLength(tyre: number, diameter:number) {
  tyreCircumference(): number {
    return (this.data.diameter / 2 + this.data.width) + Math.PI;

    //in real life, the tyre diameter  (part that is rubber), is roughly close enough to its actual height
  }

  calc() {

     this.data.distance= this.spinRatio() * this.tyreCircumference();
  }

  show() {
    alert(this.data.front + " " + this.data.rear + " is the front & rear " + this.data.diameter + " is the diam.");
  }
  more() {
    alert(this.tyreCircumference() + " is the circumf..");
    //this.log(this.tyreCircumference());

  }
}
