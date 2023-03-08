import { Component, ViewChild } from '@angular/core';
import { NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
})
export class VisionComponent {
  data = {
    title: 'buenaVista',
    color: 'beige',
    progress: 25,
  };

  //window.onload =init;

  @ViewChild('myaccordion', { static: true }) accordion: NgbAccordion;

  constructor() {}

  //ngOnInit() {}

  init() {
    console.log('x is 7');
    document.body.style.background = this.data.color;
  }

  onLogoclick() {
    alert('You clicked a coq');
  }

  onTyping(changedTitle: string) {
    this.data.title = changedTitle;
  }

  changeColour(newColour: string) {
    document.body.style.backgroundColor = newColour;
  }

  updateProgress(newPro: number) {
    this.data.progress = newPro;
  }

  togglePanel(id: string) {
    this.accordion.toggle(id);
  }
}
