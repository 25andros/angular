import { Component } from '@angular/core';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css'],
})
export class BetaComponent {
  hidden = false;

  noteValue = 5;

  /*
  function noteUp():number{
this.noteValue +=1;
  }
*/

  color = 'primary';
  mode = 'determinate';
  value = 77;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
