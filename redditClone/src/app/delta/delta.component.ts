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

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  sendUpFx(alpha: string) {
    this.CIsendUp.emit(alpha);
  }
}
